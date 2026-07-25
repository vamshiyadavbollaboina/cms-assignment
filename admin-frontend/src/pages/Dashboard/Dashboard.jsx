import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DashboardLayout from "../../components/layout/DashboardLayout";
import { fetchPages } from "../../store/slices/pageSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { pages } = useSelector((state) => state.pages);

  useEffect(() => {
    dispatch(fetchPages());
  }, [dispatch]);

  const total = pages.length;

  const published = pages.filter((page) => page.status === "published").length;

  const drafts = pages.filter((page) => page.status === "draft").length;

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Heading */}

        <h1
          className="
          text-2xl 
          sm:text-3xl 
          font-bold 
          text-gray-800
        "
        >
          Dashboard
        </h1>

        {/* Cards */}

        <div
          className="
          mt-8
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
        >
          <Card title="Total Pages" value={total} icon="📄" />

          <Card title="Published" value={published} icon="✅" />

          <Card title="Draft Pages" value={drafts} icon="📝" />
        </div>
      </div>
    </DashboardLayout>
  );
};

const Card = ({ title, value, icon }) => (
  <div
    className="
      bg-white
      rounded-xl
      shadow-sm
      border
      border-gray-200
      p-6
      transition
      hover:shadow-lg
    "
  >
    <div
      className="
      flex
      items-center
      justify-between
    "
    >
      <div>
        <h3
          className="
          text-sm
          sm:text-base
          font-medium
          text-gray-500
        "
        >
          {title}
        </h3>

        <h1
          className="
          mt-3
          text-3xl
          sm:text-4xl
          font-bold
          text-gray-800
        "
        >
          {value}
        </h1>
      </div>

      <div
        className="
        text-4xl
      "
      >
        {icon}
      </div>
    </div>
  </div>
);

export default Dashboard;
