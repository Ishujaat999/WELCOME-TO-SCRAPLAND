import React from "react";
import { Container } from "react-bootstrap";
import ScraplandNav from "./ScraplandNav";
import store_icon from "../assets/images/svg/store_icon.svg";
import link_icon from "../assets/images/svg/link_icon.svg";
import discord_icon from "../assets/images/svg/discord_icon.svg";
import twitter_icon from "../assets/images/svg/twitter_icon.svg";
import steam_icon from "../assets/images/svg/steam_icon.svg";
import MainSlider from "./MainSlider";

const Header = () => {
  return (
    <>
      <section className="header_bg_img min-vh-100 d-flex flex-column justify-content-center">
        <ScraplandNav />
        <section className="flex-grow-1 d-flex flex-column justify-content-center">
          <Container>
            <h1 className="ff_poppins fw_medium fs_2xl text-white text-center mt-4 pt-3 pt-sm-5">
              WELCOME TO{" "}
              <span className="ff_unbounded gradient_text_color">
                SCRAPLAND
              </span>
            </h1>
            <p className="ff_poppins fw-normal fs_sm text-white text-center mt-3 mt-sm-4">
              Check out our gamemodes and servers below
            </p>
            <div className="d-flex gap-3 gap-sm-5 justify-content-center mt-4 mt-md-5">
              <div className="text-center">
                <a href="#">
                  <img src={store_icon} alt="store_icon" />
                  <p className="ff_poppins links fw-normal fs_xsm text-white opacity_0_3 mt-2">
                    STORE
                  </p>
                </a>
              </div>
              <div className="text-center">
                <a href="#">
                  <img src={link_icon} alt="link_icon" />
                  <p className="ff_poppins links fw-normal fs_xsm text-white opacity_0_3 mt-2">
                    LINK
                  </p>
                </a>
              </div>
              <div className="text-center">
                <a href="#">
                  <img src={discord_icon} alt="discord_icon" />
                  <p className="ff_poppins links fw-normal fs_xsm text-white opacity_0_3 mt-2">
                    DISCORD
                  </p>
                </a>
              </div>
              <div className="text-center">
                <a href="#">
                  <img src={twitter_icon} alt="twitter_icon" />
                  <p className="ff_poppins links fw-normal fs_xsm text-white opacity_0_3 mt-2">
                    TWITTER
                  </p>
                </a>
              </div>
              <div className="text-center">
                <a href="#">
                  <img src={steam_icon} alt="steam_icon" />
                  <p className="ff_poppins links fw-normal fs_xsm text-white opacity_0_3 mt-2">
                    STEAM
                  </p>
                </a>
              </div>
            </div>
          </Container>
          <MainSlider />
        </section>
      </section>
    </>
  );
};

export default Header;
