import { useEffect, useState } from "react";

import api from "../utils/api";

import Navbar from "../components/Navbar";
import BlockRenderer from "../components/BlockRenderer";

const Home = () => {
  const [page, setPage] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHome();
  }, []);

  const fetchHome = async () => {
    try {
      const response = await api.get("/pages/slug/home");

      setPage(response.data.page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!page) {
    return <h2>Home Page Not Found</h2>;
  }

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

export default Home;
