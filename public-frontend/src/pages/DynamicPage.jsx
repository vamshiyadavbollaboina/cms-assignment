import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "../utils/api";
import Navbar from "../components/Navbar";
import BlockRenderer from "../components/BlockRenderer";

const DynamicPage = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const pageSlug = slug || "home";

  useEffect(() => {
    fetchPage();
  }, [slug]);

  const fetchPage = async () => {
    try {
      const response = await api.get(`/pages/slug/${pageSlug}`);

      setPage(response.data.page);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (!page) return <h2>Page Not Found</h2>;
  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "40px",
        }}
      >
        <BlockRenderer blocks={page.blocks} />
      </div>
    </>
  );
};

export default DynamicPage;
