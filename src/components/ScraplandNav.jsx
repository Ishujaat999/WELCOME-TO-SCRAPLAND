import React, { useState } from "react";
import { Container, Nav, Row } from "react-bootstrap";
import PageLogo from "../assets/images/png/page_logo.png";

const ScraplandNav = () => {
  const [nav, setnav] = useState(false);
  if (nav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav className="navbar mt-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center py-3 w-100">
            <div className="d-flex align-items-center position-relative">
              <a href="#" className="d-inline-bloack position-absolute">
                <img src={PageLogo} alt="PageLogo" />
              </a>
              <ul className="ps-0 mb-0 d-none d-lg-flex align-items-center ps-5 ms-5">
                <li className="me-3 ms-5">
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links "
                    href="#Store"
                  >
                    Store
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links "
                    href="#Marketplace"
                  >
                    Marketplace
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links "
                    href="#Bans"
                  >
                    Bans
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links "
                    href="#Servers"
                  >
                    Servers
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links "
                    href="#Schedule"
                  >
                    Schedule
                  </a>
                </li>
              </ul>
            </div>
            <button className="text-white d-none d-lg-inline-block fs_sm ff_inter fw-normal border-0 bg-transparent">
              Login
            </button>
            <button
              onClick={() => setnav(true)}
              className="bg-transparent border-0 d-lg-none menu position-relative"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>
          {/* responsive nav */}
          <div className={`${nav ? "show_nav" : "nav_hide"}`}>
            <div className="d-flex align-items-center gap-4 flex-column position-relative min-vh-100 w-100 justify-content-center d-lg-none">
              <button
                onClick={() => setnav(false)}
                className="btn btn-close btn-close-white fs-3 position-absolute top-0 end-0 mt-5 me-5"
              ></button>
              <ul className="ps-0 mb-0 d-flex flex-column gap-4 align-items-center">
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links "
                    href="#Store"
                  >
                    Store
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links ff_inter fw-normal"
                    href="#Marketplace"
                  >
                    Marketplace
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links ff_inter fw-normal"
                    href="#Bans"
                  >
                    Bans
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links ff_inter fw-normal"
                    href="#Servers"
                  >
                    Servers
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links ff_inter fw-normal"
                    href="#Schedule"
                  >
                    Schedule
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_sm ff_inter fw-normal text-white nav_links ff_inter fw-normal"
                    href="#FAQs"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default ScraplandNav;
