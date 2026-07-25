import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const BlockRenderer = ({ blocks }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const Heading = block.data.level || "h2";

            const headingClasses = {
              h1: "text-4xl md:text-6xl font-bold text-center text-gray-900 mb-6",
              h2: "text-3xl md:text-4xl font-bold text-gray-800 mb-5",
              h3: "text-2xl font-semibold text-gray-700 mb-4",
            };

            const className = headingClasses[Heading] || headingClasses.h2;

            return (
              <Heading key={index} className={className}>
                {block.data.text}
              </Heading>
            );
          }

          case "paragraph":
            return (
              <p
                key={index}
                className="text-lg text-gray-600 leading-8 text-center max-w-4xl mx-auto"
              >
                {block.data.text}
              </p>
            );

          case "image":
            return (
              <img
                key={index}
                src={block.data.url}
                alt={block.data.alt || ""}
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            );

          case "list":
            return (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {block.data.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-md border p-6 flex items-center gap-4 hover:shadow-xl transition"
                  >
                    <FaCheckCircle className="text-green-600 text-2xl flex-shrink-0" />

                    <h3 className="text-lg font-semibold">{item}</h3>
                  </div>
                ))}
              </div>
            );

          case "table":
            return (
              <div key={index} className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      {block.data.headers.map((head, i) => (
                        <th
                          key={i}
                          className="px-5 py-3 border border-blue-500 text-left"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {block.data.rows.map((row, i) => (
                      <tr key={i} className="even:bg-gray-100 hover:bg-gray-50">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="px-5 py-3 border border-gray-300"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "contact":
            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
                  <FaEnvelope className="text-blue-600 text-3xl" />

                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">{block.data.email}</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
                  <FaPhoneAlt className="text-green-600 text-3xl" />

                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">{block.data.phone}</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">
                  <FaMapMarkerAlt className="text-red-600 text-3xl" />

                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">{block.data.address}</p>
                  </div>
                </div>
              </div>
            );

          default:
            return (
              <div
                key={index}
                className="bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg p-4"
              >
                Unsupported block type: <strong>{block.type}</strong>
              </div>
            );
        }
      })}
    </div>
  );
};

export default BlockRenderer;
