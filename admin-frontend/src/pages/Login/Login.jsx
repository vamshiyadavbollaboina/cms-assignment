import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { loginAdmin } from "../../store/slices/authSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await dispatch(loginAdmin(data));

    if (result.meta.requestStatus === "fulfilled") {
      navigate("/");
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
      px-4
      "
    >
      <div
        className="
        w-full
        max-w-md
        bg-white
        rounded-2xl
        shadow-lg
        p-8
        "
      >
        <h1
          className="
          text-3xl
          font-bold
          text-center
          text-blue-600
          mb-2
          "
        >
          CMS Admin
        </h1>

        <p
          className="
          text-center
          text-gray-500
          mb-8
          "
        >
          Login to manage your website content
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}

          <div className="mb-5">
            <label
              className="
              block
              text-gray-700
              font-medium
              mb-2
              "
            >
              Email
            </label>

            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="
              w-full
              px-4
              py-3
              border
              border-gray-300
              rounded-lg
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />
          </div>

          {/* Password */}

          <div className="mb-6">
            <label
              className="
              block
              text-gray-700
              font-medium
              mb-2
              "
            >
              Password
            </label>

            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className="
              w-full
              px-4
              py-3
              border
              border-gray-300
              rounded-lg
              outline-none
              focus:ring-2
              focus:ring-blue-500
              "
            />
          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-lg
            font-semibold
            hover:bg-blue-700
            transition
            duration-300
            "
          >
            Login
          </button>
        </form>

        {/* Register Link */}

        <div
          className="
          text-center
          mt-6
          "
        >
          <p className="text-gray-600">
            Don't have an account?
            <Link
              to="/register"
              className="
              ml-2
              text-blue-600
              font-semibold
              hover:underline
              "
            >
              Register
            </Link>
          </p>
        </div>

        {/* Demo Credentials */}

        <div
          className="
          mt-6
          bg-blue-50
          border
          border-blue-200
          rounded-lg
          p-4
          "
        >
          <h4
            className="
            font-semibold
            text-blue-700
            mb-2
            "
          >
            Demo Credentials
          </h4>

          <p className="text-gray-700">
            <strong>Email:</strong> admin@gmail.com
          </p>

          <p className="text-gray-700">
            <strong>Password:</strong> admin123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
