import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DashboardLayout from "../../components/layout/DashboardLayout";
import PageTable from "../../components/pages/PageTable";

import { fetchPages } from "../../store/slices/pageSlice";

const Pages = () => {
  const dispatch = useDispatch();

  const { pages, loading } = useSelector((state) => state.pages);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchPages());
  }, [dispatch]);

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Pages Management
            </h1>

            <p className="text-gray-500 mt-1">Manage website pages from CMS</p>
          </div>

          <Link to="/pages/create">
            <button
              className="
              bg-blue-600
              text-white
              px-5
              py-3
              rounded-lg
              font-medium
              hover:bg-blue-700
              transition
              shadow
              "
            >
              + Create Page
            </button>
          </Link>
        </div>

        {/* Search */}

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <input
            type="search"
            placeholder="Search pages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            md:w-96
            px-4
            py-3
            border
            border-gray-300
            rounded-lg
            outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            "
          />
        </div>

        {/* Table */}

        <div className="bg-white rounded-xl shadow-sm p-5">
          {loading ? (
            <div className="flex justify-center py-10">
              <p className="text-gray-500">Loading pages...</p>
            </div>
          ) : (
            <PageTable pages={filteredPages} />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pages;
