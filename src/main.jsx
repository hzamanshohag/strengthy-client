import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddClasses from "./components/admin/AddClasses";
import AddTrainer from "./components/admin/AddTrainer";
import Admin from "./components/admin/Admin";
import AdminDasBoard from "./components/admin/AdminDasBoard";
import AllClasses from "./components/admin/AllClasses";
import AllTrainer from './components/admin/AllTrainer';
import AuthProvider from "./components/authProvider/AuthProvider";
import Classes from "./components/ClassesPage/Classes";
import Dashboard from "./userDashboard/Dashboard";
import Error from "./components/Error";
import Galary from "./components/galaryPage/Galary";
import Home from "./components/homePage/Home";
import Login from "./components/login/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root";
import SignUp from "./components/signUp/SignUp";
import Trainer from "./components/Trainer/Trainer";
import TrainerBookedPlan from "./components/TrainerBookedPlan/TrainerBookedPlan";
import UserClases from "./userDashboard/UserClases";
import UserDashboard from "./userDashboard/UserDashboard";
import UserTrainer from "./userDashboard/UserTrainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/galary",
        element: <Galary />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/trainer",
        element: <Trainer />,
      },
      {
        path: "/plan",
        element: <TrainerBookedPlan />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/user-dasboard",
    element: <UserDashboard />,
    errorElement: <Error />,
    children: [
      {
        path: "/user-dasboard",
        element: <Dashboard />,
      },
      {
        path: "/user-dasboard/clases",
        element: <UserClases />,
      },
      {
        path: "/user-dasboard/trainer",
        element: <UserTrainer />,
      },
    ],
  },
  {
    path: "/admin-dasboard",
    element: <Admin />,
    errorElement: <Error />,
    children: [
      {
        path: "/admin-dasboard",
        element: <AdminDasBoard />,
      },
      {
        path: "/admin-dasboard/add-clases",
        element: <AddClasses />,
      },
      {
        path: "/admin-dasboard/all-clases",
        element: <AllClasses />,
      },
      {
        path: "/admin-dasboard/add-trainer",
        element: <AddTrainer />,
      },
      {
        path: "/admin-dasboard/all-trainer",
        element: <AllTrainer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
