//import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./routes/errorPage.tsx";
import TodoPage from "./routes/todoPage.tsx";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "todo",
      element: <TodoPage />,
    },
  ]);

  return (
    <>
      <ScrollToHashElement behavior="smooth" inline="center" block="center"/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
