import { useEffect, useState } from "react";

import api from "../utils/api";
import Navbar from "../components/Navbar";
import BlockRenderer from "../components/BlockRenderer";

const Contact = () => {
  const [page, setPage] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const response = await api.get("/pages/slug/contact");

      setPage(response.data.page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-2xl font-semibold">Contact Page Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <BlockRenderer blocks={page.blocks} />
        </div>
      </div>
    </>
  );
};

export default Contact;
