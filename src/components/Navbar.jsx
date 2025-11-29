import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-3xl">🔮</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Fortune Cookie
            </span>
          </NavLink>

          <div className="flex gap-6">
            <NavLink
              to="/"
              end
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-gray-600 transition-all hover:bg-gray-100"
            >
              🏠 Home
            </NavLink>

            <NavLink
              to="/templates"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-gray-600 transition-all hover:bg-gray-100"
            >
              📚 Templates
            </NavLink>

            <NavLink
              to="/saved"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-gray-600 transition-all hover:bg-gray-100"
            >
              💾 Saved
            </NavLink>

            <NavLink
              to="/create"
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transition-all"
            >
              ➕ Create
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
