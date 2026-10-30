import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* App Logo */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold text-purple-600"
        >
          FamilySplit
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">

          <Link
            to="/dashboard"
            className="font-medium text-gray-700 hover:text-purple-600"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;