# Content Management System (CMS)

A full-stack Content Management System (CMS) that enables administrators to create, edit, publish, and manage dynamic website pages. The public website renders pages dynamically from the CMS without requiring frontend code changes.

---

## Live Demo

### Public Website
https://content-management-system-public.vercel.app/

### Admin Panel
https://content-management-system-ebon.vercel.app/

### Backend API
https://content-management-system-bwf7.onrender.com

---

## Tech Stack

### Public-Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Icons

### Admin Panel
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- dotenv

### Deployment
- Frontend: Vercel
- Admin: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Features

### Admin Panel

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

### Public Website

- Dynamic Routing
- Dynamic Navigation
- SEO-friendly URLs
- Responsive Layout
- CMS-driven Pages
- Block Rendering

---

## Supported Content Blocks

- Heading
- Paragraph
- Image
- List
- Contact Information
- Table

---

## Architecture Overview

```
               Admin Panel
                     │
                     │ REST API
                     ▼
              Express.js Backend
                     │
               Mongoose ODM
                     │
                     ▼
              MongoDB Atlas
                     │
                     ▼
          Public React Website
```

The Admin Panel communicates with the backend through REST APIs. Page data is stored in MongoDB Atlas. The public website dynamically fetches published pages using their slug and renders them through reusable React components.

---

## Folder Structure

```
cms-project/

│
├── admin-frontend/
│
├── backend/
│
├── public-frontend/
│
└── README.md
```

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/vamshiyadavbollaboina/cms-assignment.git
```

---

### Backend

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

### Admin

```bash
cd admin-frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

### Public Website

```bash
cd public-frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5174
```

---

## Environment Variables

Backend (.env)

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

Admin (.env)

```
VITE_API_URL=http://localhost:5000/api
```

Public Website (.env)

```
VITE_API_URL=http://localhost:5000/api
```

---

## API Endpoints

### Authentication

POST /api/auth/login

---

### Pages

GET /api/pages

GET /api/pages/slug/:slug

POST /api/pages

PUT /api/pages/:id

DELETE /api/pages/:id

---

## Assumptions

- Only authenticated administrators can manage pages.
- Only published pages are visible on the public website.
- Pages are uniquely identified using their slug.
- MongoDB Atlas is used as the production database.
- Images are referenced using URLs.

---

## Sample Admin Credentials

Email

```
admin@example.com
```

Password

```
admin123
```

---

## Future Improvements

- Drag-and-drop block editor
- Rich Text Editor
- Media Library
- Version History
- Page Preview
- Role-based Access Control
- Search
- Analytics
- Theme Management

---

## Author

Bollaboina Vamshi Yadav
