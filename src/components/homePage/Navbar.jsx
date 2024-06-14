import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../authProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {

const { user, logOut } = useContext(AuthContext);
console.log(user);
  
    return (
      <div className="navbar bg-base-100 fixed md:w-[90%] lg:w-[80%] mx-auto z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/galary">Galary</NavLink>
              </li>
              <li>
                <NavLink to="/classes">Classes</NavLink>
              </li>
              <li>
                <NavLink to="/trainer">Trainer</NavLink>
              </li>
              <li>
                <NavLink to="/plan">Plan</NavLink>
              </li>
              <li>
                <NavLink to="/user-dasboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-2xl text-[#1D2229] font-bold"
          >
            Strengthy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/galary">Galary</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
            <li>
              <NavLink to="/trainer">Trainer</NavLink>
            </li>
            <li>
              <NavLink to="/plan">Plan</NavLink>
            </li>
            <li>
              <NavLink to="/user-dasboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/admin-dasboard">Admin</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Link onClick={() => logOut()}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;