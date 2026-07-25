require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");

const Admin = require("../models/Admin");

const seedAdmin = async () => {
  await connectDB();

  const adminExists = await Admin.findOne({
    email: "admin@gmail.com",
  });

  if (adminExists) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash("Admin@123", 10);

  await Admin.create({
    name: "Super Admin",
    email: "admin@gmail.com",
    password: hashedPassword,
  });

  console.log("Admin Created Successfully");

  process.exit();
};

seedAdmin();