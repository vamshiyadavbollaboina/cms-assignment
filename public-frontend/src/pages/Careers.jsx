import { useEffect, useState } from "react";

import api from "../utils/api";
import Navbar from "../components/Navbar";
import BlockRenderer from "../components/BlockRenderer";

const Careers = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await api.get("/pages/slug/careers");

      setPage(response.data.page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold">Careers Page Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-md p-8">
          <BlockRenderer blocks={page.blocks} />
        </div>
      </div>
    </>
  );
};

export default Careers;
