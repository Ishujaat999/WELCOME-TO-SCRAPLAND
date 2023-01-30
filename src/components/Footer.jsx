import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import page_logo from "../assets/images/png/page_logo.png";
import footer_discord from "../assets/images/svg/footer_discord.svg";
import footer_twitter from "../assets/images/svg/footer_twitter.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="text-center text-white py-lg-5">
            <img className="mb-4" src={page_logo} alt="page_logo" />
            <Row className="justify-content-center ">
              <Col lg={10} xl={7} className="px-sm-4">
                <p className="ff_poppins fw-normal fs_sm opacity_0_5">
                  Iaculis turpis phasellus dolor fringilla. Sed tristique erat
                  accumsan est. Tortor morbi odio nisl dictumst lectus
                  elementum. Cras dictum pulvinar dolor diam pell.
                </p>
                <div className="d-flex gap-2 gap-sm-5 justify-content-center mt-3">
                  <div className="ff_poppins fw-normal fs_xsm text-white text-center opacity_0_5 links mt-2">
                    HOME
                  </div>

                  <div className="ff_poppins fw-normal fs_xsm text-white text-center opacity_0_5 links mt-2">
                    LINK
                  </div>

                  <div className="ff_poppins fw-normal fs_xsm text-white text-center opacity_0_5 links mt-2">
                    BANS
                  </div>

                  <div className="ff_poppins fw-normal fs_xsm text-white text-center opacity_0_5 links mt-2">
                    LEADERBOARD
                  </div>

                  <div className="ff_poppins fw-normal fs_xsm text-white text-center opacity_0_5 links mt-2">
                    ABOUT
                  </div>

                  <div className="ff_poppins fw-normal fs_xsm text-white text-center opacity_0_5 links mt-2">
                    APPLICATIONS
                  </div>
                </div>
                <span className="d-flex justify-content-center align-items-center gap-5 mt-4 mt-md-5">
                  <a href="#">
                    <img src={footer_discord} alt="footer_discord" />
                  </a>
                  <a href="#">
                    <img src={footer_twitter} alt="footer_twitter" />
                  </a>
                </span>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
