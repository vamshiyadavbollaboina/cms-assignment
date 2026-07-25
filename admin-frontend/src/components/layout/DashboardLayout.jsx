import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className="
        w-full 
        md:w-64 
        bg-white 
        shadow-md
      "
      >
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div
        className="
        flex-1 
        flex 
        flex-col
        min-h-screen
      "
      >
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}

        <main
          className="
          flex-1
          p-4
          sm:p-6
          md:p-8
          overflow-x-auto
        "
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
