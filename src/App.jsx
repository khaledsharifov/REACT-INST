import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Nothing from "./pages/Nothing/Nothing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <Home/>
      },
      {
        path: "about",
        element:<About/>
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
