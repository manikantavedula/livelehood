import Home3Slider from "@/src/components/sliders/Home3";
import Link from "next/link";
import Menu from "../Menu";

import { home1Slider } from "@/src/sliderProps";
import Slider from "react-slick";

const Header5 = () => {
  return (
    <header
      className="header-area header-three header-slider-34 position-fixed"
      style={{ zIndex: "99999", width: "100%" }}
    >
      {/* <Home3Slider /> */}

      {/*====== Header Top Bar ======*/}
      {/* <div className="header-top-bar pt-30 pb-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 d-none d-xl-block">
              <div className="site-brading">
                <Link legacyBehavior href="/index-3">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-black123.png"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-12">
              <div className="information-wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <span className="title">Office Address</span>
                          <h5>Auroville</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-envelope" />
                        </div>
                        <div className="info">
                          <span className="title">Email Address</span>
                          <h5>
                            <a href="mailto:support@gmail.com">
                              support@gmail.com
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-phone-plus" />
                        </div>
                        <div className="info">
                          <span className="title">Drop a Line</span>
                          <h5>
                            <a href="tel:+000(123)45688">+000 (123) 456 78</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*====== Header Navigation ======*/}
      <div className="header-navigation navigation-white">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}
            <div className="site-brading d-block d-xl-none">
              <Link legacyBehavior href="/index-3">
                <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo-white.png"
                    alt="Logo"
                    width={"100"}
                  />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className="nav-menu">
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-black.png"
                      alt="Site Logo"
                      width={"100"}
                    />
                  </a>
                </Link>
              </div>
              {/*=== Nav Search ===*/}
              <div className="nav-search mb-30 d-block d-xl-none d-none">
                <form>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Search Here"
                      name="email"
                      required
                    />
                    <button className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>
              {/*====== Main Menu ======*/}
              <Menu />
              {/*====== Menu Button ======*/}
              {/* <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </Link>
              </div> */}
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item">
              <div className="lang-dropdown"></div>
              {/* <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </Link>
              </div> */}
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header5;
