import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../utils/axios";

export const loginAdmin = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await api.post("/auth/login", data);

      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login Failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    isAuthenticated: !!localStorage.getItem("token"),
    admin: null,
    error: null,
  },

  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");

      state.isAuthenticated = false;
      state.admin = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
      })

      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.admin = action.payload.admin;
      })

      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;