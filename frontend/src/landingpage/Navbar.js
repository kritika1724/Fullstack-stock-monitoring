import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return ( <nav
        class="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img
              src="media/newlogo.png"
              style={{ width: "50%" }}
              alt="Logo"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item mx-3">
                  <Link class="nav-link active" aria-current="page" to={"/signup"}>
                    Signup
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link class="nav-link active" to={"/about"}>
                    About
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link class="nav-link active" to={"/product"}>
                    Product
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link class="nav-link active" to={"/pricing"}>
                    Pricing
                  </Link>
                </li>
                <li class="nav-item mx-3">
                  <Link class="nav-link active" to={"/support"}>
                    Support
                  </Link>
                </li>
                <li className="nav-item dropdown mx-3">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <i class="fa fa-list-ul" aria-hidden="true"></i>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/services">Services</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog">Blog</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact">Contact</Link>
                </li>
              </ul>
            </li>

              </ul>
            </form>
          </div>
        </div>
      </nav> );
}
export default Navbar;