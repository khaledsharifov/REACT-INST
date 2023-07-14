import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Nothing from "./pages/Nothing/Nothing";
import Login from "./LogIn/Login";
import SignUp from "./SignUp/SignUp";
import Explore from "./pages/Explore/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "signUp",
    element: <SignUp/>
  },
  {
    path: "layout",
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <Home/>
      },
      {
        path: "profile",
        element:<Profile/>
      },
      {
        path: "explore",
        element:<Explore/>
      },
      {
        path: "*",
        element: <Nothing/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
