import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import { partnerSliderOne, testimonialSliderOne } from "@/src/sliderProps";
import { home1Slider } from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Community = () => {
  return (
    <Layout header={5}>
      <div id="community" className="hero-wrapper black-bg mt-0">
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

      <section className="we-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              <div className="we-content-box mb-10 wow fadeInLeft">
                <div className="section-title mb-30">
                  <span className="sub-title">Join Us</span>
                  <h2>Join the LiveLEhood Movement</h2>
                </div>
                <div className="features-list_one">
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-journey" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>
                        Ready to embark on a journey towards a more sustainable
                        and fulfilling life?
                      </h4>
                      <p>
                        Join the LiveLEhood movement and be a pioneer in
                        creating a community where the future is brighter, and
                        the possibilities are endless.
                      </p>
                    </div>
                  </div>
                  <div className="single-features-list mb-40">
                    <div className="icon-inner d-flex align-items-center">
                      <div className="icon-check">
                        <i className="fas fa-badge-check" />
                      </div>
                      <div className="icon">
                        <i className="flaticon-hiking" />
                      </div>
                    </div>
                    <div className="content">
                      <h4>Explore the potential,</h4>
                      <p>
                        Connect with like-minded individuals, and be a part of
                        something extraordinary. Live the LiveLEhood way—where
                        sustainability meets innovation, and community thrives.
                        Welcome home!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="we-two_image-box mb-20">
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInLeft">
                      <img
                        src="assets/images/gallery/we-3.png"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="we-image mb-30 wow fadeInRight">
                      <img
                        src="assets/images/gallery/we-4.png"
                        alt="we Image"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="we-image mb-30 pr-lg-30 text-md-end wow fadeInDown">
                      <img
                        src="assets/images/gallery/we-5.png"
                        alt="we Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Community;
