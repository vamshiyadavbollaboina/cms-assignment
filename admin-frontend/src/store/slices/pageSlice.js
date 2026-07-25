import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as pageService from "../../services/pageService";
import { deletePage as deletePageAPI } from "../../services/pageService";
import {
  createPage,
  getPages,
  getPage,
  updatePage,
  deletePage,
} from "../../services/pageService";

// Fetch All Pages

export const fetchPages = createAsyncThunk(
  "pages/fetchPages",
  async (_, thunkAPI) => {
    try {
      return await pageService.getPages();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch pages",
      );
    }
  },
);

// Create Page
export const addPage = createAsyncThunk(
  "pages/addPage",
  async (data, thunkAPI) => {
    try {
      return await pageService.createPage(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create page",
      );
    }
  },
);

// Update Page
export const editPage = createAsyncThunk(
  "pages/editPage",
  async ({ id, data }, thunkAPI) => {
    try {
      return await pageService.updatePage(id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update page",
      );
    }
  },
);

// Delete Page
export const removePage = createAsyncThunk(
  "pages/removePage",
  async (id, thunkAPI) => {
    try {
      await pageService.deletePage(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete page",
      );
    }
  },
);

export const fetchSinglePage = createAsyncThunk(
  "pages/fetchSinglePage",
  async (id, thunkAPI) => {
    try {
      return await getPage(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to fetch page",
      );
    }
  },
);

const pageSlice = createSlice({
  name: "pages",

  initialState: {
    pages: [],
    loading: false,
    error: null,
    selectedPage: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch Pages
      .addCase(fetchPages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPages.fulfilled, (state, action) => {
        state.loading = false;
        state.pages = action.payload.pages;
      })

      .addCase(fetchPages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Page
      .addCase(addPage.pending, (state) => {
        state.loading = true;
      })

      .addCase(addPage.fulfilled, (state, action) => {
        state.loading = false;
        state.pages.unshift(action.payload.page);
      })

      .addCase(addPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update Page
      .addCase(editPage.fulfilled, (state, action) => {
        state.pages = state.pages.map((page) =>
          page._id === action.payload.page._id ? action.payload.page : page,
        );
      })

      .addCase(fetchSinglePage.fulfilled, (state, action) => {
        state.selectedPage = action.payload.page;
      })

      // Delete Page
      .addCase(removePage.fulfilled, (state, action) => {
        state.pages = state.pages.filter((page) => page._id !== action.payload);
      });
  },
});

export default pageSlice.reducer;
