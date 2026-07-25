const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["heading", "paragraph", "image", "list", "table", "code", "math"],
    },

    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    order: {
      type: Number,
      default: 0,
    },
  },
  { _id: false },
);

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    seoTitle: {
      type: String,
      default: "",
    },

    seoDescription: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    blocks: [blockSchema],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Page", pageSchema);
