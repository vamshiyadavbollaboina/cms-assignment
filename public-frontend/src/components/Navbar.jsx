import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import api from "../utils/api";

const Navbar = () => {
  const [pages, setPages] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await api.get("/pages");

      const publishedPages = response.data.pages.filter(
        (page) => page.status === "published",
      );

      setPages(publishedPages);
    } catch (error) {
      console.log("Navbar Error:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <Link to="/" className="text-2xl md:text-3xl font-bold text-blue-600">
            CMS Website
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">
            {pages.map((page) => (
              <NavLink
                key={page._id}
                to={page.slug === "home" ? "/" : `/${page.slug}`}
                className={({ isActive }) =>
                  `
                    text-lg font-medium transition
                    ${
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }
                    `
                }
              >
                {page.title}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="
              bg-blue-600 
              text-white 
              px-5 
              py-2 
              rounded-lg
              hover:bg-blue-700
              transition
              "
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="
              md:hidden 
              flex 
              flex-col 
              gap-4 
              pb-6
              "
          >
            {pages.map((page) => (
              <NavLink
                key={page._id}
                onClick={() => setMenuOpen(false)}
                to={page.slug === "home" ? "/" : `/${page.slug}`}
                className={({ isActive }) =>
                  `
                      text-lg font-medium px-3 py-2 rounded
                      ${
                        isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"
                      }
                      `
                }
              >
                {page.title}
              </NavLink>
            ))}

            <Link
              onClick={() => setMenuOpen(false)}
              to="/contact"
              className="
                bg-blue-600
                text-white
                text-center
                px-5
                py-3
                rounded-lg
                "
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
