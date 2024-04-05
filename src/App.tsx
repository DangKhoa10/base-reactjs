import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./app/layout/layout";
import Dashboard from "./app/pages/dashboard/dashboard";
import { About } from "./app/pages/about/about";
import { useEffect } from "react";
import { Theme } from "./assets/styles/color";
import { useAppSelector } from "./hooks";

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
  const theme = useAppSelector((state) => state.theme.value)
  const scheme = useAppSelector((state) => state.scheme.value)

  useEffect(() => {
    loadTheme()
  }, [theme])

  useEffect(() => {
    loadScheme()
  }, [scheme])

  function loadTheme() {
    document.documentElement.style.setProperty('--primary-color-50', Theme[theme]["--primary-color-50"])
    document.documentElement.style.setProperty('--primary-color-100', Theme[theme]["--primary-color-100"])
    document.documentElement.style.setProperty('--primary-color-200', Theme[theme]["--primary-color-200"])
    document.documentElement.style.setProperty('--primary-color-300', Theme[theme]["--primary-color-300"])
    document.documentElement.style.setProperty('--primary-color-400', Theme[theme]["--primary-color-400"])
    document.documentElement.style.setProperty('--primary-color-500', Theme[theme]["--primary-color-500"])
    document.documentElement.style.setProperty('--primary-color-600', Theme[theme]["--primary-color-600"])
    document.documentElement.style.setProperty('--primary-color-700', Theme[theme]["--primary-color-700"])
    document.documentElement.style.setProperty('--primary-color-800', Theme[theme]["--primary-color-800"])
    document.documentElement.style.setProperty('--primary-color-900', Theme[theme]["--primary-color-900"])
    document.documentElement.style.setProperty('--primary-color-950', Theme[theme]["--primary-color-950"])
    document.documentElement.style.setProperty('--primary-color', Theme[theme]["--primary-color"])
  }

  function loadScheme() {
    if (scheme === 'dark') {
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
    }
    document.documentElement.classList.add(scheme)
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App
