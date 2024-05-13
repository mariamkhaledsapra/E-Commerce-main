import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
      {
        index:true,
        element: <Navbar />,
      },
      {
        path: "/login",
        element: <Login />,
      },
  
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={Routes}>
    <App />
  </RouterProvider>
);

reportWebVitals();
