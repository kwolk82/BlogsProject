import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/app/Layout";
import { routes } from "@/app/routes";

const router = createBrowserRouter([{ element: <Layout />, children: routes }]);

export default function App() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
