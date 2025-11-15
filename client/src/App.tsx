import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import Goals from "@/routes/Goals";
import Habits from "@/routes/Habits";
import Layout from "@/routes/Layout";
import Mood from "@/routes/Mood";
import NotFound from "@/routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/" replace />,
      },
      {
        path: "mood",
        element: <Mood />,
      },
      {
        path: "goals",
        element: <Goals />,
      },
      {
        path: "habits",
        element: <Habits />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
