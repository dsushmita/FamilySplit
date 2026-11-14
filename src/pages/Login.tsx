import { useState, type FormEvent } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { loginUser } from "../services/auth.service";

function Login() {
    const navigate = useNavigate(); //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Step 1: Validate login form
  const validateForm = (): boolean => {
    if (!email.trim()) {
      setError("Email is required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!password) {
      setError("Password is required.");
      return false;
    }

    setError("");
    return true;
  };

  // Validate login details and authenticate with the backend.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const result = await loginUser({
        email: email.trim().toLowerCase(),
        password,
      });

      /**
     * For this learning project, sessionStorage provides a simple way to keep the JWT available when navigating between pages or refreshing the tab.

It is cleared when the tab's session ends. However, browser storage is accessible to JavaScript, so it isn't the preferred long-term solution for sensitive authentication tokens. Later, we can implement a more secure cookie-based session.
     */
      // Save the JWT for authenticated API requests.
      sessionStorage.setItem("token", result.token);

      //The JWT is proof that the user has authenticated.
      //Your backend requires that token when accessing protected APIs such as:

      // Redirect to the dashboard after successful login.
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">
          FamilySplit
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <label className="mb-2 block text-sm font-medium">Email</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="mb-4 w-full rounded-lg border border-gray-300 p-3"
          />

          {/* Password */}
          <label className="mb-2 block text-sm font-medium">Password</label>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="mb-4 w-full rounded-lg border border-gray-300 p-3"
          />

          {/* Error Message */}
          {error && (
            <p
              role="alert"
              className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          {/* Success Message */}
          {success && (
            <p
              role="status"
              className="mb-4 rounded-lg bg-green-100 p-3 text-sm text-green-700"
            >
              {success}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 p-3 font-semibold text-white hover:bg-purple-700"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="font-semibold text-purple-600">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
