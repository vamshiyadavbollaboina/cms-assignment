import { useState } from "react";
import BlockEditor from "./BlockEditor";

const PageForm = ({ onSubmit, initialData = null }) => {
  const [title, setTitle] = useState(initialData?.title || "");

  const [seoTitle, setSeoTitle] = useState(initialData?.seoTitle || "");

  const [seoDescription, setSeoDescription] = useState(
    initialData?.seoDescription || "",
  );

  const [status, setStatus] = useState(initialData?.status || "draft");

  const [blocks, setBlocks] = useState(initialData?.blocks || []);

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      seoTitle,
      seoDescription,
      status,
      blocks,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div
        className="
        max-w-4xl 
        mx-auto 
        bg-white 
        rounded-xl 
        shadow-lg 
        p-6 
        sm:p-8
      "
      >
        <h1
          className="
          text-2xl 
          sm:text-3xl 
          font-bold 
          text-gray-800 
          mb-6
        "
        >
          {initialData ? "Edit Page" : "Create Page"}
        </h1>

        <form onSubmit={submitHandler} className="space-y-6">
          {/* Page Title */}

          <div>
            <label
              className="
              block 
              text-sm 
              font-medium 
              text-gray-700 
              mb-2
            "
            >
              Page Title
            </label>

            <input
              type="text"
              placeholder="Enter page title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          {/* SEO Title */}

          <div>
            <label
              className="
              block 
              text-sm 
              font-medium 
              text-gray-700 
              mb-2
            "
            >
              SEO Title
            </label>

            <input
              type="text"
              placeholder="Enter SEO title"
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          {/* SEO Description */}

          <div>
            <label
              className="
              block
              text-sm
              font-medium
              text-gray-700
              mb-2
            "
            >
              SEO Description
            </label>

            <textarea
              rows="4"
              placeholder="Enter SEO description"
              value={seoDescription}
              onChange={(e) => setSeoDescription(e.target.value)}
              className="
                w-full
                px-4
                py-3
                border
                border-gray-300
                rounded-lg
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          {/* Status */}

          <div>
            <label
              className="
              block
              text-sm
              font-medium
              text-gray-700
              mb-2
            "
            >
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="
                w-full
                sm:w-64
                px-4
                py-3
                border
                border-gray-300
                rounded-lg
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option value="draft">Draft</option>

              <option value="published">Published</option>
            </select>
          </div>

          {/* Block Editor */}

          <div
            className="
            border
            border-gray-200
            rounded-lg
            p-4
            bg-gray-50
          "
          >
            <h2
              className="
              text-lg
              font-semibold
              mb-4
            "
            >
              Page Content
            </h2>

            <BlockEditor blocks={blocks} setBlocks={setBlocks} />
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            className="
              w-full
              sm:w-auto
              bg-blue-600
              text-white
              px-8
              py-3
              rounded-lg
              font-semibold
              hover:bg-blue-700
              transition
              duration-300
            "
          >
            {initialData ? "Update Page" : "Save Page"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PageForm;
