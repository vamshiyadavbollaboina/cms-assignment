import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../utils/axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      alert("Registration successful");

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      className="
      min-h-screen 
      flex 
      items-center 
      justify-center 
      bg-gray-100
    "
    >
      <div
        className="
        bg-white 
        p-8 
        rounded-xl 
        shadow-md 
        w-full 
        max-w-md
      "
      >
        <h1
          className="
          text-3xl 
          font-bold 
          text-center 
          mb-6
        "
        >
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full
              border
              p-3
              rounded-lg
            "
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="
              w-full
              border
              p-3
              rounded-lg
            "
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="
              w-full
              border
              p-3
              rounded-lg
            "
            required
          />

          <button
            className="
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-lg
              hover:bg-blue-700
            "
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-5">
          Already have an account?
          <Link to="/login" className="text-blue-600 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
