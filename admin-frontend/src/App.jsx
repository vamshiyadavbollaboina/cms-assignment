import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Pages from "./pages/Pages/Pages";
import CreatePage from "./pages/Pages/CreatePage";
import ProtectedRoute from "./routes/ProtectedRoute";
import EditPage from "./pages/Pages/EditPage";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/pages"
        element={
          <ProtectedRoute>
            <Pages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pages/create"
        element={
          <ProtectedRoute>
            <CreatePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pages/edit/:id"
        element={
          <ProtectedRoute>
            <EditPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
