import { home3Slider } from "@/src/sliderProps";
import Link from "next/link";
import { Component } from "react";
import Slider from "react-slick";

export default class Home3Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="hero-section">
        <div className="hero-wrapper-three hero-wrapper-34 hero-wrapper-45 hero-wrapper-five">
          {/* <div className="hero-arrows">
            <div className="prev slick-arrow" onClick={this.previous}>
              <i className="far fa-arrow-left" />
            </div>
            <div className="next slick-arrow" onClick={this.next}>
              <i className="far fa-arrow-right" />
            </div>
          </div> */}
          <Slider
            {...home3Slider}
            ref={(c) => (this.slider = c)}
            className="hero-slider-three"
          >
            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/DSC_0791.JPG)",
                  height: "100vh",
                }}
              />
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{
                    height: "100vh",
                  }}
                >
                  <div className="col-xl-7">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <h3 className="wow fadeInDown mb-30" data-wow-delay=".5s">
                        <span style={{ color: "#e5af54" }}>
                          Harmony in Diversity:
                        </span>{" "}
                        A Co-Existic Village for a Thriving Lifestyle and
                        Livelihood
                      </h3>
                      <p
                        className="wow fadeInUp"
                        style={{ background: "#0b2823" }}
                        data-wow-delay=".6s"
                      >
                        Collaborative | Experimental | Innovative | Sustainable
                        | Holistic
                      </p>

                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn secondary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                        <Link legacyBehavior href="/about">
                          <a className="main-btn secondary-btn">
                            Learn More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Single Slider ===*/}

            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(assets/images/hero/DSC_0832.JPG)",
                  height: "100vh",
                }}
              />
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{
                    height: "100vh",
                  }}
                >
                  <div className="col-xl-7">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <h3 className="wow fadeInDown mb-30" data-wow-delay=".5s">
                        <span style={{ color: "#e5af54" }}>
                          Harmony in Diversity:
                        </span>{" "}
                        A Co-Existic Village for a Thriving Lifestyle and
                        Livelihood
                      </h3>
                      <p
                        className="wow fadeInUp"
                        style={{ background: "#0b2823" }}
                        data-wow-delay=".6s"
                      >
                        Collaborative | Experimental | Innovative | Sustainable
                        | Holistic
                      </p>

                      <div
                        className="hero-button"
                        data-animation="fadeInRight"
                        data-delay=".6s"
                      >
                        <Link legacyBehavior href="/about">
                          <a className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                        <Link legacyBehavior href="/about">
                          <a className="main-btn secondary-btn">
                            Learn More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*=== Single Slider ===*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage:
                    "url(assets/images/hero/20231127_062151.jpg)",
                  height: "100vh",
                }}
              />
              <div className="container">
                <div
                  className="row align-items-center"
                  style={{
                    height: "100vh",
                  }}
                >
                  <div className="col-xl-7">
                    {/*=== Hero Content ===*/}
                    <div className="hero-content text-white">
                      <span
                        className="sub-title wow fadeInUp"
                        data-wow-delay=".3s"
                        style={{ fontFamily: "special_elite" }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          Welcome to LiveLEhood Habitat:{" "}
                        </span>
                        <span style={{ color: "#fff", fontWeight: "bold" }}>
                          &nbsp; Your Gateway to Better Lifestyle
                        </span>
                      </span>

                      <h6 className="wow fadeInDown mb-30" data-wow-delay=".5s">
                        Discover a life where sustainability meets innovation,
                        and community thrives. <br /> LiveLEhood Habitat is not
                        just a place; <br />
                        <br />
                        it's a movement—
                        <span style={{ color: "#e5af54" }}>
                          a Co-ExIStic (Collaborative | Experimental |
                          Innovative | Sustainable | Holistic)
                        </span>{" "}
                        village dedicated to redefining the way we live, work,
                        and connect with the world around us.
                      </h6>
                    </div>
                  </div>

                  {/* <div className="col-xl-5 d-xl-block d-none">
        <div
          className="hero-image wow fadeInRight"
          data-wow-delay=".8s"
        >
          <img
            src="assets/images/hero/hero-four-img-my.png"
            alt="hero image"
          />
        </div>
      </div> */}
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
