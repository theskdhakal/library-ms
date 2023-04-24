import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const UserLayout = ({ children }) => {
  return (
    <div className="use-layout">
      <div className="left bg-dark p-2 pt-5">
        <div className="title mt-5 fs-2">User Name</div>

        <hr />

        <div className="sidebar fw-bolder">
          <ul>
            {/* for admin only  */}

            <li>
              <Link className="nav-Link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="nav-Link" to="/books">
                Books
              </Link>
            </li>
            <li>
              <Link className="nav-Link" to="/clients">
                Clients
              </Link>
            </li>
            <li>
              <Link className="nav-Link" to="/history">
                History
              </Link>
            </li>
            <li>
              <Link className="nav-Link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="right">
        {/* header section  */}
        <Header />

        {/* main content area  */}
        <div className="main pt-5">{children}</div>

        {/* footer section  */}
        <Footer />
      </div>
    </div>
  );
};
