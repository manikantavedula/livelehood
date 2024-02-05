import Layout from "@/src/layout/Layout";
import {
  partnerSliderOne,
  sliderActive3Item,
  sliderActive5Item,
  testimonialSliderOne,
  sliderActive2Item,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Home3Slider from "@/src/components/sliders/Home3";
import Link from "next/link";
import { home1Slider } from "@/src/sliderProps";
import Slider from "react-slick";
import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index4 = () => {
  return (
    <Layout header={5}>
      <div id="logoanchor" className="hero-wrapper black-bg mt-0">
        <Home3Slider />
      </div>

      <div className="container pt-100">
        <div className="row">
          <div className="col-xl-4">
            <section
              className="service-section-two black-bg pt-30 pb-30"
              style={{ height: "100%", borderRadius: "10px" }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="section-title text-center text-white wow fadeInDown mb-10">
                      <span
                        className="sub-title"
                        style={{ fontWeight: "bold" }}
                      >
                        Vision
                      </span>
                      <h6>
                        A collaborative & supportive ecosystem with a Holistic
                        Approach fostering a better Lifestyle & LiveLEhood for
                        LiveLEhooders
                      </h6>
                      <br />
                      <p
                        style={{
                          height: "120px",
                          overflow: "hidden",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          src="assets/images/features/feat-vision.jpg"
                          alt="Features Image"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="col-xl-8">
            <section
              className="features-section gray-bg pt-30 pb-30"
              style={{ height: "100%", borderRadius: "10px" }}
            >
              <div className="container">
                <div className="row text-center justify-content-center">
                  <div className="col-lg-12">
                    <div className="section-title mb-25 wow fadeInLeft">
                      <span
                        className="sub-title sub-title-black"
                        style={{ fontWeight: "bold" }}
                      >
                        Motto
                      </span>
                      <h6>
                        HEAL: <br /> Health | Environment | Learning
                      </h6>
                    </div>
                  </div>
                </div>
                {/*=== Features Slider ===*/}
                <Slider
                  {...sliderActive3Item}
                  className="slider-active-5-item wow fadeInUp"
                >
                  {/*=== Features Item ===*/}
                  <div className="single-features-item-three">
                    <div className="img-holder">
                      <img
                        src="assets/images/features/feat-10.png"
                        alt="Features Image"
                      />
                    </div>
                    <div className="content" style={{ background: "#0c241e" }}>
                      <h6 style={{ color: "#fff" }}>Health</h6>
                    </div>
                  </div>
                  {/*=== Features Item ===*/}
                  <div className="single-features-item-three">
                    <div className="img-holder">
                      <img
                        src="assets/images/features/feat-11.png"
                        alt="Features Image"
                      />
                    </div>
                    <div className="content" style={{ background: "#0c241e" }}>
                      <h6 style={{ color: "#fff" }}>Environment</h6>
                    </div>
                  </div>
                  {/*=== Features Item ===*/}
                  <div className="single-features-item-three">
                    <div className="img-holder">
                      <img
                        src="assets/images/features/feat-12.png"
                        alt="Features Image"
                      />
                    </div>
                    <div className="content" style={{ background: "#0c241e" }}>
                      <h6 style={{ color: "#fff" }}>Learning</h6>
                    </div>
                  </div>
                </Slider>
              </div>
            </section>
          </div>
        </div>
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

      {/* <section id="habitat" className="hero-section position-relative">
        <div className="hero-wrapper-four">
          <div className="shape top-0">
            <span>
              <img src="assets/images/hero/map.png" alt />
            </span>
          </div>
          <div className="container mt-30">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <div className="hero-content">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <span style={{ fontWeight: "bold" }}>
                      Welcome to LiveLEhood Habitat:
                    </span>
                    <span style={{ color: "#0d2821", fontWeight: "bold" }}>
                      Your Gateway to Sustainable Living
                    </span>
                  </span>
                  <h3 className="wow fadeInDown" data-wow-delay=".5s">
                    Discover a life where sustainability meets innovation, and
                    community thrives. <br /> LiveLEhood Habitat is not just a
                    place; <br />
                    <br />
                    it's a movement—
                    <span style={{ color: "#e5af54" }}>
                      a Co-ExIStic (Collaborative | Experimental | Innovative |
                      Sustainable | Holistic)
                    </span>{" "}
                    village dedicated to redefining the way we live, work, and
                    connect with the world around us.
                  </h3>
                </div>
              </div>
              <div className="col-xl-5 d-xl-block d-none">
                <div
                  className="hero-image wow fadeInRight"
                  data-wow-delay=".8s"
                >
                  <img
                    src="assets/images/hero/hero-four-img-my.png"
                    alt="hero image"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section> */}
      {/*====== Start Hero Section ======*/}

      {/* <div id="wee">
        <PageBanner pageTitle={"WEE"} />
      </div>

      <div id="heal">
        <PageBanner pageTitle={"HEAL"} />
      </div> */}
    </Layout>
  );
};
export default Index4;
