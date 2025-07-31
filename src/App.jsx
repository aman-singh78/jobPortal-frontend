import { useState } from "react";

import NavBar from "./components/ui/shared/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/ui/auth/login";
import Signup from "./components/ui/auth/Signup";
import Home from "./components/ui/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
