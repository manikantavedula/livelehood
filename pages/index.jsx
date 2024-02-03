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
