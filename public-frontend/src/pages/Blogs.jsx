import { useEffect, useState } from "react";
import api from "../utils/api";

import Navbar from "../components/Navbar";
import BlockRenderer from "../components/BlockRenderer";

const Blog = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const response = await api.get("/pages/slug/blog");
      setPage(response.data.page);
    } catch (error) {
      console.error("Error fetching blog page:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="flex items-center justify-center min-h-[80vh]">
          <h2 className="text-3xl font-bold text-blue-600 animate-pulse">
            Loading...
          </h2>
        </div>
      </>
    );
  }

  if (!page) {
    return (
      <>
        <Navbar />

        <div className="flex items-center justify-center min-h-[80vh]">
          <h2 className="text-3xl font-bold text-red-600">
            Blog Page Not Found
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <BlockRenderer blocks={page.blocks} />
        </div>
      </section>
    </>
  );
};

export default Blog;
