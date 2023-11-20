import React, { useContext } from "react";
import "../css_files/nav.css";
import MyContext from "../myContext";

function NavHead() {
  const {tab, setTab} = useContext(MyContext);
  return (
        <nav
          className="navbar navbar-expand-lg"
          style={{ border: "0px solid #eaf3f2", backgroundColor: "#EBF3F4" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={() => {
                      setTab(1);
                    }}
                  >
                    Pending
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      setTab(2);
                    }}
                  >
                    Completed
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  );
}

export default NavHead;
