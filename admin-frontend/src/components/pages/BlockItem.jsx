const BlockItem = ({ block, update, remove }) => {
  const updateData = (field, value) => {
    update({
      ...block,
      data: {
        ...block.data,
        [field]: value,
      },
    });
  };

  const inputStyle =
    "w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  const buttonStyle = "px-4 py-2 rounded-lg font-medium transition";

  return (
    <div
      className="
      w-full
      bg-white
      border
      border-gray-200
      rounded-xl
      p-4
      sm:p-6
      mb-5
      shadow-sm
      "
    >
      {/* Block Title */}

      <h4
        className="
        text-lg
        sm:text-xl
        font-bold
        text-gray-800
        mb-5
        "
      >
        {block.type.toUpperCase()}
      </h4>

      {/* Heading */}

      {block.type === "heading" && (
        <div className="space-y-4">
          <select
            className={inputStyle}
            value={block.data.level}
            onChange={(e) => updateData("level", e.target.value)}
          >
            <option value="h1">H1</option>
            <option value="h2">H2</option>
            <option value="h3">H3</option>
          </select>

          <input
            className={inputStyle}
            type="text"
            placeholder="Heading Text"
            value={block.data.text}
            onChange={(e) => updateData("text", e.target.value)}
          />
        </div>
      )}

      {/* Paragraph */}
      {block.type === "paragraph" && (
        <textarea
          className={inputStyle}
          rows="5"
          placeholder="Paragraph"
          value={block.data.text}
          onChange={(e) => updateData("text", e.target.value)}
        />
      )}

      {/* Image */}
      {block.type === "image" && (
        <div className="space-y-4">
          <input
            className={inputStyle}
            type="text"
            placeholder="Image URL"
            value={block.data.url}
            onChange={(e) => updateData("url", e.target.value)}
          />

          <input
            className={inputStyle}
            type="text"
            placeholder="Alt Text"
            value={block.data.alt}
            onChange={(e) => updateData("alt", e.target.value)}
          />
        </div>
      )}

      {/* List */}
      {block.type === "list" && (
        <div className="space-y-3">
          {block.data.items.map((item, index) => (
            <input
              key={index}
              className={inputStyle}
              value={item}
              placeholder={`Item ${index + 1}`}
              onChange={(e) => {
                const items = [...block.data.items];
                items[index] = e.target.value;
                updateData("items", items);
              }}
            />
          ))}

          <button
            type="button"
            className={`
              ${buttonStyle}
              bg-blue-600
              text-white
              hover:bg-blue-700
            `}
            onClick={() => updateData("items", [...block.data.items, ""])}
          >
            + Add Item
          </button>
        </div>
      )}

      {/* Table */}
      {block.type === "table" && (
        <div className="space-y-4">
          <p className="font-semibold text-gray-700">Headers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {block.data.headers.map((header, index) => (
              <input
                key={index}
                className={inputStyle}
                value={header}
                placeholder={`Header ${index + 1}`}
                onChange={(e) => {
                  const headers = [...block.data.headers];
                  headers[index] = e.target.value;
                  updateData("headers", headers);
                }}
              />
            ))}
          </div>

          <p className="font-semibold text-gray-700">First Row</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {block.data.rows[0]?.map((cell, index) => (
              <input
                key={index}
                className={inputStyle}
                value={cell}
                placeholder={`Cell ${index + 1}`}
                onChange={(e) => {
                  const rows = [...block.data.rows];
                  rows[0][index] = e.target.value;
                  updateData("rows", rows);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Equation */}

      {block.type === "equation" && (
        <input
          className={inputStyle}
          type="text"
          placeholder="Example: E = mc²"
          value={block.data.formula}
          onChange={(e) => updateData("formula", e.target.value)}
        />
      )}

      {/* Delete Button */}

      <button
        type="button"
        className={`
          mt-6
          ${buttonStyle}
          bg-red-600
          text-white
          hover:bg-red-700
        `}
        onClick={remove}
      >
        Delete Block
      </button>
    </div>
  );
};

export default BlockItem;
