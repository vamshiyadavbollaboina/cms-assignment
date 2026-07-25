import BlockItem from "./BlockItem";

const blockTemplates = {
  heading: {
    type: "heading",
    data: {
      level: "h1",
      text: "",
    },
  },

  paragraph: {
    type: "paragraph",
    data: {
      text: "",
    },
  },

  image: {
    type: "image",
    data: {
      url: "",
      alt: "",
    },
  },

  list: {
    type: "list",
    data: {
      items: [""],
    },
  },

  table: {
    type: "table",
    data: {
      headers: ["", ""],
      rows: [["", ""]],
    },
  },

  equation: {
    type: "equation",
    data: {
      formula: "",
    },
  },
};

const BlockEditor = ({ blocks, setBlocks }) => {
  const addBlock = (type) => {
    setBlocks([...blocks, JSON.parse(JSON.stringify(blockTemplates[type]))]);
  };

  const updateBlock = (index, updatedBlock) => {
    const updated = [...blocks];

    updated[index] = updatedBlock;

    setBlocks(updated);
  };

  const deleteBlock = (index) => {
    const updated = [...blocks];

    updated.splice(index, 1);

    setBlocks(updated);
  };

  const buttons = [
    {
      name: "Heading",
      type: "heading",
    },
    {
      name: "Paragraph",
      type: "paragraph",
    },
    {
      name: "Image",
      type: "image",
    },
    {
      name: "List",
      type: "list",
    },
    {
      name: "Table",
      type: "table",
    },
    {
      name: "Equation",
      type: "equation",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}

      <h3
        className="
        text-xl 
        md:text-2xl 
        font-bold 
        text-gray-800 
        mb-5
      "
      >
        Content Blocks
      </h3>

      {/* Add Block Buttons */}

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-6
          gap-3
          mb-8
        "
      >
        {buttons.map((button) => (
          <button
            key={button.type}
            type="button"
            onClick={() => addBlock(button.type)}
            className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
                font-medium
                hover:bg-blue-700
                transition
                shadow-sm
              "
          >
            {button.name}
          </button>
        ))}
      </div>

      {/* Blocks */}

      <div
        className="
        space-y-5
      "
      >
        {blocks.length === 0 ? (
          <div
            className="
                border
                border-dashed
                border-gray-300
                rounded-xl
                p-8
                text-center
                text-gray-500
              "
          >
            No blocks added yet
          </div>
        ) : (
          blocks.map((block, index) => (
            <div
              key={index}
              className="
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  p-4
                  md:p-6
                  shadow-sm
                "
            >
              <BlockItem
                block={block}
                update={(data) => updateBlock(index, data)}
                remove={() => deleteBlock(index)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlockEditor;
