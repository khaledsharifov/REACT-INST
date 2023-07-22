import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Nothing from "./pages/Nothing/Nothing";

import Explore from "./pages/Explore/Explore";
import Messages from "./pages/Messages/Messages";
import EditProfile from "./pages/EditProfile/EditProfile";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Reels from "./pages/Reels/Reels";
import AuthCheck from "./utils/AuthCheck";
import ProtectRoute from "./utils/ProtectedRoute";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/LogIn/Login";
import User from "./pages/User/UserProfile";
import UserProfile from "./pages/User/UserProfile";


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
        path: "user/:userId",
        element: <UserProfile />,
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
