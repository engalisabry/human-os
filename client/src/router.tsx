import { Icon } from "@iconify/react";
import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router"; 

import Layout from "@/routes/Layout";
import NotFound from "@/routes/NotFound";
import Dashboard from "@/routes/Dashboard"; 

const Mood = lazy(() => import("@/routes/Mood"));
const Goals = lazy(() => import("@/routes/Goals"));
const Habits = lazy(() => import("@/routes/Habits"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <Icon icon="eos-icons:bubble-loading" width="24" height="24" />
              </div>
            }
          >
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "mood",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <Icon icon="eos-icons:bubble-loading" width="24" height="24" />
              </div>
            }
          >
            <Mood />
          </Suspense>
        ),
      },
      {
        path: "goals",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <Icon icon="eos-icons:bubble-loading" width="24" height="24" />
              </div>
            }
          >
            <Goals />
          </Suspense>
        ),
      },
      {
        path: "habits",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center">
                <Icon icon="eos-icons:bubble-loading" width="24" height="24" />
              </div>
            }
          >
            <Habits />
          </Suspense>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
