import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TaskManagementPage from "./pages/TaskManagementPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import { AuthProvider } from "./contexts/authContext.tsx";
import RouteGuard from "./components/RouteGuard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteGuard redirectTo="/sign-in">
        <TaskManagementPage />
      </RouteGuard>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <RouteGuard redirectTo="/" requireAuth={false}>
        <SignInPage />
      </RouteGuard>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <RouteGuard redirectTo="/" requireAuth={false}>
        <SignUpPage />
      </RouteGuard>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
