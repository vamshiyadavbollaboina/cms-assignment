const slugify = require("slugify");

const Page = require("../models/Page");

exports.createPage = async (req, res) => {
  try {
    const { title, seoTitle, seoDescription, status, blocks } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,

        message: "Title Required",
      });
    }
    if (blocks.length === 0) {
      return res.status(400).json({
        success: false,

        message: "At least one block required",
      });
    }

    const slug = slugify(title, {
      lower: true,
      strict: true,
    });

    const page = await Page.create({
      title,
      slug,
      seoTitle,
      seoDescription,
      status,
      blocks,
    });

    res.status(201).json({
      success: true,
      page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Pages
exports.getPages = async (req, res) => {
  try {
    const pages = await Page.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: pages.length,
      pages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Page
exports.getPage = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page Not Found",
      });
    }

    res.json({
      success: true,
      page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Page
exports.updatePage = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page Not Found",
      });
    }

    if (req.body.title) {
      req.body.slug = slugify(req.body.title, {
        lower: true,
        strict: true,
      });
    }

    const updated = await Page.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({
      success: true,
      page: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Page
exports.deletePage = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page Not Found",
      });
    }

    await page.deleteOne();

    res.json({
      success: true,
      message: "Page Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Page by Slug (Public API)
exports.getPageBySlug = async (req, res) => {
  try {
    const page = await Page.findOne({
      slug: req.params.slug,
      status: "published",
    });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page Not Found",
      });
    }

    res.json({
      success: true,
      page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
