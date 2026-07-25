import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());

    window.location.href = "/login";
  };

  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Pages",
      path: "/pages",
      icon: <FaFileAlt />,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
        md:hidden
        fixed
        top-4
        left-4
        z-50
        bg-slate-800
        text-white
        p-3
        rounded-lg
        "
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-64
          bg-slate-800
          text-white
          p-6
          transition-transform
          duration-300
          z-40

          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}

        `}
      >
        {/* Logo */}

        <h2
          className="
          text-2xl
          font-bold
          mb-6
        "
        >
          CMS Admin
        </h2>

        <hr className="border-slate-600" />

        {/* Navigation */}

        <nav
          className="
          flex
          flex-col
          gap-3
          mt-6
        "
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-lg
                  transition

                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-slate-700"
                  }

                  `
              }
            >
              {link.icon}

              <span>{link.name}</span>
            </NavLink>
          ))}

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
            mt-8
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            text-red-300
            hover:bg-red-500
            hover:text-white
            transition
            "
          >
            <FaSignOutAlt />
            Logout
          </button>
        </nav>
      </aside>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            md:hidden
            fixed
            inset-0
            bg-black/40
            z-30
            "
        />
      )}
    </>
  );
};

export default Sidebar;
