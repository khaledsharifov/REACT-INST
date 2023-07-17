import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Nothing from "./pages/Nothing/Nothing";
import Login from "./LogIn/Login";
import SignUp from "./SignUp/SignUp";
import Explore from "./pages/Explore/Explore";
import Messages from "./pages/Messages/Messages";
import EditProfile from "./pages/EditProfile/EditProfile";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Reels from "./pages/Reels/Reels";
import AuthCheck from "./utils/AuthCheck";
import ProtectRoute from "./utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthCheck>
        <Login />
      </AuthCheck>
    ),
  },
  {
    path: "/signUp",
    element: (
      <AuthCheck>
        <SignUp />
      </AuthCheck>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <Layout />
      </ProtectRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "reels",
        element: <Reels />,
      },
      {
        path: "editProfile",
        element: <EditProfile />,
      },
      {
        path: "changePassword",
        element: <ChangePassword />,
      },
      {
        path: "*",
        element: <Nothing />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
