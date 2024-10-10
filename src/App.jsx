import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import DashboardHome from "./components/Student/DashboardHome";
import JobListing from "./components/Student/JobListing";
import Events from "./components/Student/Events";
import Profile from "./components/Student/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/student/dashboard",
    element: <StudentDashboard />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "jobs",
        element: <JobListing />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}
