import { Outlet, NavLink } from "react-router-dom";

export default function StudentDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Placement Cell</h2>
        </div>
        <nav className="mt-6">
          <NavLink
            to="/student/dashboard"
            className="block py-2 px-4 text-gray-700 bg-gray-200 hover:bg-gray-300"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/student/dashboard/jobs"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Job Listings
          </NavLink>
          <NavLink
            to="/student/dashboard/events"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Events
          </NavLink>
          <NavLink
            to="/student/dashboard/profile"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            My Profile
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome, Student!
        </h1>
        <Outlet />
      </main>
    </div>
  );
}
