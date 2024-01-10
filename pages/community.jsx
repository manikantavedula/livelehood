import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { partnerSliderOne, testimonialSliderOne } from "@/src/sliderProps";
import { home1Slider } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Community = () => {
  return (
    <Layout header={3}>
      <div className="hero-wrapper black-bg mt-0">
        {/*=== Hero Slider ===*/}
        <Slider {...home1Slider} className="hero-slider-one">
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-6">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    <h3 className="wow fadeInDown mb-30" data-wow-delay=".5s">
                      A Co-ExIStic <br />
                      <span style={{ color: "#e5af54" }}>
                        (Collaborative | Experimental | Innovative | Sustainable
                        | Holistic)
                      </span>{" "}
                      Village for a Thriving Lifestyle & LiveLEhood
                    </h3>
                    <div className="text-button d-flex align-items-center">
                      <p data-animation="fadeInLeft" data-delay=".5s">
                        Harmony in Diversity: A Co-Existic Village for a
                        Thriving Lifestyle and Livelihood
                      </p>
                      {/* <div
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
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  {/*=== Hero Image ===*/}
                  <div className="hero-image" data-animation="fadeInRight">
                    <img
                      src="assets/images/hero/DSC_0791.JPG"
                      alt="Hero Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-6">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    <h3 className="wow fadeInDown mb-30" data-wow-delay=".5s">
                      A Co-ExIStic <br />
                      <span style={{ color: "#e5af54" }}>
                        (Collaborative | Experimental | Innovative | Sustainable
                        | Holistic)
                      </span>{" "}
                      Village for a Thriving Lifestyle & LiveLEhood
                    </h3>
                    <div className="text-button d-flex align-items-center">
                      <p data-animation="fadeInLeft" data-delay=".5s">
                        Harmony in Diversity: A Co-Existic Village for a
                        Thriving Lifestyle and Livelihood
                      </p>
                      {/* <div
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
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  {/*=== Hero Image ===*/}
                  <div className="hero-image" data-animation="fadeInRight">
                    <img
                      src="assets/images/hero/DSC_0832.JPG"
                      alt="Hero Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <GallerySection />
    </Layout>
  );
};
export default Community;
