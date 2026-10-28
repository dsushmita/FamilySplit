import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function Login() {
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

  // Step 2: Handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccess("");

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    // Actual login authentication will be added later.
    setSuccess("Validation successful! Login is not connected yet.");
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
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="mb-4 w-full rounded-lg border border-gray-300 p-3"
          />

          {/* Password */}
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

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
          <Link
            to="/register"
            className="font-semibold text-purple-600"
          >
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;