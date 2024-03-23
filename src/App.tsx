import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./app/layout/layout";
import Dashboard from "./app/pages/dashboard/dashboard";
import About from "./app/pages/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      }, {
        path: "about",
        element: <About />,
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
