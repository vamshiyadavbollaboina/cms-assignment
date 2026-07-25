import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removePage } from "../../store/slices/pageSlice";

const PageTable = ({ pages }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?",
    );

    if (confirmDelete) {
      dispatch(removePage(id));
    }
  };

  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-6 py-4 text-left font-semibold">Title</th>

            <th className="px-6 py-4 text-left font-semibold">Slug</th>

            <th className="px-6 py-4 text-left font-semibold">Status</th>

            <th className="px-6 py-4 text-center font-semibold">Actions</th>
          </tr>
        </thead>

        <tbody>
          {pages.length === 0 && (
            <tr>
              <td
                colSpan="4"
                className="
                  text-center 
                  py-12 
                  text-gray-500
                  text-lg
                  "
              >
                No Pages Found
              </td>
            </tr>
          )}

          {pages.map((page) => (
            <tr
              key={page._id}
              className="
                border-b
                hover:bg-gray-50
                transition
                "
            >
              <td className="px-6 py-4">
                <p className="font-medium text-gray-800">{page.title}</p>
              </td>

              <td className="px-6 py-4 text-gray-600">/{page.slug}</td>

              <td className="px-6 py-4">
                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-medium

                    ${
                      page.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }

                    `}
                >
                  {page.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">
                  <Link
                    to={`/pages/edit/${page._id}`}
                    className="
                      bg-blue-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      hover:bg-blue-700
                      transition
                      "
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteHandler(page._id)}
                    className="
                      bg-red-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      hover:bg-red-700
                      transition
                      "
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageTable;
