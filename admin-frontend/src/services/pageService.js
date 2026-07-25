import api from "../utils/axios";

export const getPages = async () => {
  const response = await api.get("/pages");
  return response.data;
};

export const createPage = async (data) => {
  const response = await api.post("/pages", data);
  return response.data;
};

export const updatePage = async (id, data) => {
  const response = await api.put(`/pages/${id}`, data);
  return response.data;
};

export const deletePage = async (id) => {
  const response = await api.delete(`/pages/${id}`);
  return response.data;
};

export const getPage = async (id) => {
  const response = await api.get(`/pages/${id}`);
  return response.data;
};
