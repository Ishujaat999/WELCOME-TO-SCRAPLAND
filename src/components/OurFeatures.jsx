import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
// import computer from "../assets/images/png/computer.png";
// import weapons from "../assets/images/png/weapons.png";
import slider_graph from "../assets/images/png/slider_graph.png";
import { Col, Container, Row } from "react-bootstrap";
const OurFeatures = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  var leftSlider = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 3.13,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.2,
          autoplay: true,
          autoplaySpeed: 1500,
          pauseOnHover: false,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  var rightSlider = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <>
      <div
        id="Store"
        className="py-5 d-flex flex-column align-items-center justify-content-center"
      >
        <Container>
          <Row className="justify-content-between align-items-center">
            <h3 className="text-center text-md-start ff_inter fw_medium fs_xxl">
              OUR
              <span className="gradient_text_color">FEATURES!</span>
            </h3>
            <Col lg={7} xl={6}>
              <div className="left_slider_gradient position-relative">
                <Slider
                  className="review_of_slider"
                  asNavFor={nav2}
                  ref={slider1}
                  {...leftSlider}
                >
                  <div className="left_slider px-4 py-4 text-white">
                    <p className="mb-0 ff_inter fs_xl fw-semibold">
                      REVIEW YOUR STATS!
                    </p>
                    <p className="mb-0 ff_poppins opacity_05 pt-2 fw_medium fs_md">
                      Tincidunt laoreet integer ut aenean rhoncus.
                    </p>
                  </div>
                  <div className="left_slider px-4 py-4 text-white">
                    <p className="mb-0 ff_inter fs_xl fw-semibold">
                      PLAY TO EARN
                    </p>
                    <p className="mb-0 ff_poppins opacity_05 pt-2 fw_medium fs_md">
                      Tincidunt laoreet integer ut aenean rhoncus.
                    </p>
                  </div>
                  <div className="left_slider px-4 py-4 text-white">
                    <p className="mb-0 ff_inter text-uppercase fs_xl fw-semibold">
                      Trade your items!
                    </p>
                    <p className="mb-0 ff_poppins opacity_05 pt-2 fw_medium fs_md">
                      Tincidunt laoreet integer ut aenean rhoncus.
                    </p>
                  </div>
                  <div className="left_slider px-4 py-4 text-white">
                    <p className="mb-0 ff_inter fs_xl fw-semibold">
                      REVIEW YOUR STATS!
                    </p>
                    <p className="mb-0 ff_poppins opacity_05 pt-2 fw_medium fs_md">
                      Tincidunt laoreet integer ut aenean rhoncus.
                    </p>
                  </div>
                </Slider>
              </div>
            </Col>
            <Col lg={4} xl={6}>
              <div className="slider_bg_lines_img">
                <Slider asNavFor={nav1} ref={slider2} {...rightSlider}>
                  <div className="d-flex justify-content-center">
                    <img
                      className="w-75"
                      src={slider_graph}
                      alt="slider_graph"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <img
                      className="w-75"
                      src={slider_graph}
                      alt="slider_graph"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <img
                      className="w-75"
                      src={slider_graph}
                      alt="slider_graph"
                    />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurFeatures;
