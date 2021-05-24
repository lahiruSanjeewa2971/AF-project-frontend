import React from "react";
import Background from "../images/Background.jpeg";
import "bootstrap/dist/css/bootstrap.css";

/**
 *
 * @returns backgroundImage: "url(" + { Background } + ")"
 */
var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`,
};

function Header() {
  return (
    <div>
      <section style={sectionStyle}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">
                Navbar
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">
                            Home <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            KeyNotes
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Workshops
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Registrations
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Commiittee
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Past Proceedings
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            Contact
                        </a>
                    </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}
export default Header;
