# Content Management System (CMS)

A full-stack Content Management System (CMS) that enables administrators to create, edit, publish, and manage dynamic website pages. The public website renders pages dynamically from the CMS without requiring frontend code changes.

---

# Live Demo

## Public Website

https://content-management-system-public.vercel.app/

## Admin Panel

https://content-management-system-ebon.vercel.app/

## Backend API

https://content-management-system-bwf7.onrender.com/

---

# Tech Stack

## Public Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Icons

## Admin Panel

- React.js
- React Router DOM
- Axios
- Tailwind CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- dotenv

## Deployment

- Frontend: Vercel
- Admin Panel: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

# Features

## Admin Panel

- Secure Admin Login
- Dashboard
- Create Pages
- Edit Existing Pages
- Delete Pages
- Draft & Published Status
- Dynamic Content Blocks
- SEO Title
- SEO Description
- Slug Management

## Public Website

- Dynamic Routing
- Dynamic Navigation
- SEO-friendly URLs
- Responsive Layout
- CMS-driven Pages
- Dynamic Block Rendering

---

# Supported Content Blocks

- Heading
- Paragraph
- Image
- List
- Contact Information
- Table

---

# Architecture Overview

## High-Level Architecture

```text
+----------------------+
|     Admin Panel      |
|   (React + Tailwind) |
+----------+-----------+
           |
           | REST API
           |
           ▼
+----------------------+
|   Express Backend    |
|  Authentication      |
|  Page Management     |
|  Block APIs          |
+----------+-----------+
           |
           |
           ▼
+----------------------+
|      MongoDB         |
|  Pages Collection    |
|  Admin Collection    |
+----------+-----------+
           ▲
           |
           | REST API
           |
+----------+-----------+
|   Public Website     |
|       React          |
| Dynamic Page Render  |
+----------------------+
```

The application follows a **Headless CMS Architecture**, where the Admin Panel, Backend API, and Public Website are completely independent applications communicating through REST APIs.

### Admin Panel

- Built with React and Tailwind CSS
- Allows authenticated administrators to create, edit, publish, and delete pages
- Uses a dynamic block editor
- Sends all data through secured REST APIs

### Backend

- Built using Express.js and MongoDB
- Handles Authentication using JWT
- Provides CRUD APIs for pages
- Stores structured content blocks
- Serves both Admin Panel and Public Website

### Public Website

- Fetches only published pages
- Dynamically renders pages using slug-based routing
- Uses reusable Block Renderer components
- No frontend code changes are required when new pages are created

---

# Application Flow

```text
Admin Login
     │
     ▼
Create / Edit Page
     │
     ▼
Store Page in MongoDB
     │
     ▼
Public Website Requests Page
     │
     ▼
Backend Fetches Page by Slug
     │
     ▼
Block Renderer Renders Page Dynamically
```

---

# Folder Structure

```text
content-management-system/

├── admin/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── public-website/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# Component Architecture

```text
React App
│
├── Navbar
│
├── DynamicPage
│      │
│      ▼
│   API Request
│      │
│      ▼
│  BlockRenderer
│      │
│      ├── Heading
│      ├── Paragraph
│      ├── Image
│      ├── List
│      ├── Contact
│      └── Table
│
└── Footer
```

---

# Database Design

## Admin Collection

```text
_id
username
password
createdAt
updatedAt
```

## Pages Collection

```text
_id
title
slug
seoTitle
seoDescription
status
blocks[]
createdAt
updatedAt
```

---

# Request Flow

```text
Browser
   │
   ▼
React Frontend
   │
   ▼
Axios API Client
   │
   ▼
Express Routes
   │
   ▼
Controller
   │
   ▼
MongoDB
   │
   ▼
JSON Response
   │
   ▼
React UI
```

---

# Technology Interaction Diagram

```text
React (Admin)
      │
      │
      ▼
Express REST API
      │
 ┌────┴───────────────┐
 ▼                    ▼
Authentication   Page Management
      │               │
      └──────┬────────┘
             ▼
         MongoDB
             ▲
             │
React Public Website
             │
 Dynamic Block Renderer
```

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/vamshiyadavbollaboina/cms-assignment.git
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## Admin Panel

```bash
cd admin
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Public Website

```bash
cd public-website
npm install
npm run dev
```

Runs on:

```
http://localhost:5174
```

---

# Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Admin (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Public Website (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

# API Endpoints

## Authentication

### Login

```
POST /api/auth/login
```

---

## Pages

### Get All Pages

```
GET /api/pages
```

### Get Page By Slug

```
GET /api/pages/slug/:slug
```

### Create Page

```
POST /api/pages
```

### Update Page

```
PUT /api/pages/:id
```

### Delete Page

```
DELETE /api/pages/:id
```

---


# Assumptions

- Only authenticated administrators can access the CMS.
- Only pages with **Published** status are displayed on the public website.
- Each page has a unique slug.
- MongoDB Atlas is used in production.
- Images are stored as URL references.
- Public website consumes only published content.
- JWT is used for authentication.

---

# Sample Admin Credentials

**Email**

```text
admin@example.com
```

**Password**

```text
admin123
```

---

# Screenshots

Replace the placeholders below with your project screenshots.

## 1. Public Website

**Home Page**

<img width="912" height="890" alt="image" src="https://github.com/user-attachments/assets/09105c5a-2e03-4805-849a-fcb16a2cea91" />


---

## 2. Dynamic Page Rendering

**About / Services Page**

```
Insert Screenshot Here
```

---

## 3. Admin Dashboard

**Dashboard**

```
Insert Screenshot Here
```

---

## 4. Page Management

**Pages List**

```
Insert Screenshot Here
```

---

## 5. Create / Edit Page

**CMS Block Editor**

```
Insert Screenshot Here
```

---

## 6. MongoDB Collection

**Pages Collection**

```
Insert Screenshot Here
```

---

## 7. Responsive Public Website

**Mobile View**

```
Insert Screenshot Here
```

---

# Future Improvements

- Drag-and-Drop Block Editor
- Rich Text Editor
- Media Library
- Version History
- Live Preview
- Role-Based Access Control (RBAC)
- Search & Filtering
- Analytics Dashboard
- Theme Management
- Page Scheduling
- Multi-language Support
- Image Upload Integration
- Autosave Drafts
- Content Revision History

---

# Technology Choices

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI |
| React Router DOM | Client-side Routing |
| Axios | API Communication |
| Tailwind CSS | Styling |
| Node.js | Runtime Environment |
| Express.js | REST API |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Render | Backend Deployment |
| Vercel | Frontend Deployment |

---

# Deliverables

- ✅ Source Code
- ✅ GitHub Repository
- ✅ README Documentation
- ✅ Environment Variable Templates
- ✅ Sample Admin Credentials
- ✅ Live Admin Panel
- ✅ Live Public Website
- ✅ Live Backend API

---

# Author

**Bollaboina Vamshi Yadav**

**GitHub:** https://github.com/vamshiyadavbollaboina

**Project Repository:** https://github.com/vamshiyadavbollaboina/cms-assignment
