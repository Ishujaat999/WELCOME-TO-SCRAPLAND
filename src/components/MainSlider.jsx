import React from "react";
import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";
import scrapland_slider_img from "../assets/images/png/scrapland_slider_img.png";
import player_active_icon from "../assets/images/svg/player_active_icon.svg";
import buy_icon from "../assets/images/svg/buy_icon.svg";
import play_discord_icon from "../assets/images/svg/play_discord_icon.svg";
const MainSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1.66,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider className="slider py-4 py-sm-5" {...settings}>
        <div className="px-2 w-100 slide_box">
          <div className="hero_slider w-100 rounded-4 d-flex flex-column justify-content-end position-relative">
            <img
              className="w-100 z_index_1"
              src={scrapland_slider_img}
              alt="scrapland_slider_img"
            />
            <div className="position-absolute bottom-0 start-0 w-100">
              <Row className="align-items-md-center px-4 justify-content-between position-relative z_index_2 mb-3">
                <Col sm="7" lg="8" xl="8">
                  <Row className=" align-items-center text-center text-sm-start">
                    <Col xxl="4" className="px-0">
                      <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                        <img
                          src={player_active_icon}
                          alt="player_active_icon"
                        />
                        <p className="ff_poppins fw-semibold fs_lg text-white ms-2 mb-0">
                          345
                        </p>
                      </div>
                      <p className="ff_poppins fw-normal fs_xsm text-white ms-4 ps-1">
                        PLAYERS ACTIVE
                      </p>
                    </Col>
                    <Col>
                      <p className="ff_poppins fw-normal fs_xsm text-white opacity_0_7 mb-0">
                        Dignissim vitae integer odio posuere gravida sed dolor
                        purus id. Sed ipsum et amet etiam interdum amet aenean
                        gravida.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col sm="4">
                  <div className="d-flex align-items-center justify-content-sm-end justify-content-center mt-3 mt-sm-0">
                    <a className="me-2" href="#">
                      <img src={buy_icon} alt="buy_icon" />
                    </a>
                    <a className="me-3" href="#">
                      <img src={play_discord_icon} alt="play_discord_icon" />
                    </a>
                    <button className="ff_poppins fw-semibold fs_xsm border-0 py-2 px-3 rounded-5 text-white My_btn">
                      SERVER
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="px-2 w-100 slide_box">
          <div className="hero_slider w-100 rounded-4 d-flex flex-column justify-content-end position-relative">
            <img
              className="w-100 z_index_1"
              src={scrapland_slider_img}
              alt="scrapland_slider_img"
            />
            <div className="position-absolute bottom-0 start-0 w-100">
              <Row className="align-items-md-center px-4 justify-content-between position-relative z_index_2 mb-3">
                <Col sm="7" lg="8" xl="8">
                  <Row className=" align-items-center text-center text-sm-start">
                    <Col xxl="4" className="px-0">
                      <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                        <img
                          src={player_active_icon}
                          alt="player_active_icon"
                        />
                        <p className="ff_poppins fw-semibold fs_lg text-white ms-2 mb-0">
                          345
                        </p>
                      </div>
                      <p className="ff_poppins fw-normal fs_xsm text-white ms-4 ps-1">
                        PLAYERS ACTIVE
                      </p>
                    </Col>
                    <Col>
                      <p className="ff_poppins fw-normal fs_xsm text-white opacity_0_7 mb-0">
                        Dignissim vitae integer odio posuere gravida sed dolor
                        purus id. Sed ipsum et amet etiam interdum amet aenean
                        gravida.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col sm="4">
                  <div className="d-flex align-items-center justify-content-sm-end justify-content-center mt-3 mt-sm-0">
                    <a className="me-2" href="#">
                      <img src={buy_icon} alt="buy_icon" />
                    </a>
                    <a className="me-3" href="#">
                      <img src={play_discord_icon} alt="play_discord_icon" />
                    </a>
                    <button className="ff_poppins fw-semibold fs_xsm border-0 py-2 px-3 rounded-5 text-white My_btn">
                      SERVER
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="px-2 w-100 slide_box">
          <div className="hero_slider w-100 rounded-4 d-flex flex-column justify-content-end position-relative">
            <img
              className="w-100 z_index_1"
              src={scrapland_slider_img}
              alt="scrapland_slider_img"
            />
            <div className="position-absolute bottom-0 start-0 w-100">
              <Row className="align-items-md-center px-4 justify-content-between position-relative z_index_2 mb-3">
                <Col sm="7" lg="8" xl="8">
                  <Row className=" align-items-center text-center text-sm-start">
                    <Col xxl="4" className="px-0">
                      <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                        <img
                          src={player_active_icon}
                          alt="player_active_icon"
                        />
                        <p className="ff_poppins fw-semibold fs_lg text-white ms-2 mb-0">
                          345
                        </p>
                      </div>
                      <p className="ff_poppins fw-normal fs_xsm text-white ms-4 ps-1">
                        PLAYERS ACTIVE
                      </p>
                    </Col>
                    <Col>
                      <p className="ff_poppins fw-normal fs_xsm text-white opacity_0_7 mb-0">
                        Dignissim vitae integer odio posuere gravida sed dolor
                        purus id. Sed ipsum et amet etiam interdum amet aenean
                        gravida.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col sm="4">
                  <div className="d-flex align-items-center justify-content-sm-end justify-content-center mt-3 mt-sm-0">
                    <a className="me-2" href="#">
                      <img src={buy_icon} alt="buy_icon" />
                    </a>
                    <a className="me-3" href="#">
                      <img src={play_discord_icon} alt="play_discord_icon" />
                    </a>
                    <button className="ff_poppins fw-semibold fs_xsm border-0 py-2 px-3 rounded-5 text-white My_btn">
                      SERVER
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default MainSlider;
