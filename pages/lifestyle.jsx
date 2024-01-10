import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import {
  partnerSliderOne,
  sliderActive2Item,
  sliderActive3ItemDot,
} from "@/src/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Lifestyle = () => {
  return (
    <Layout header={3}>
      {/*====== Start We Section ======*/}
      <section className="who-we-section">
        <div className="hero-wrapper-four">
          <div className="container mt-30">
            <div className="row align-items-xl-center">
              <div className="col-lg-6 order-2 order-lg-1">
                {/*=== We Image Box ===*/}
                <div className="we-image-box text-center text-lg-left wow fadeInDown">
                  <img
                    src="assets/images/gallery/we-1.jpg"
                    className="radius-top-left-right-288"
                    alt="Image"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                {/*=== We Content Box ===*/}
                <div className="we-one_content-box">
                  <div className="section-title mb-30 wow fadeInUp">
                    <span className="sub-title">Lifestyle</span>
                    <h2>
                      A sustainable & affordable community{" "}
                      <span style={{ color: "#e5af54" }}>living spaces</span>{" "}
                      promoting a Holistic Well-Being
                    </h2>
                  </div>
                  <p className="wow fadeInDown">
                    Explore Our Co-Living Spaces Village Residences Discover
                    thoughtfully designed living spaces that promote
                    co-existence and collaboration.
                    <br />
                    <br />
                    Our residences are more than homes; they are spaces where
                    meaningful connections are forged. Community Spaces From
                    communal gardens to shared workspaces, explore the heart of
                    our village.
                    <br />
                    <br />
                    Experience the joy of living and working in spaces designed
                    to foster creativity, productivity, and community spirit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End We Section ======*/}

      {/*====== Start Service Section ======*/}
      <section className="service-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50">
                <span className="sub-title">Lifestyle</span>
                <h2>
                  A collaborative knowledge sharing platform promoting LifeLong
                  Learning{" "}
                </h2>
              </div>
            </div>
          </div>
          <Slider {...sliderActive2Item} className="slider-active-3-item">
            {/*=== Service Item ===*/}
            <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <a href="#">Co-Learning Hub</a>
                </h3>
                <p>
                  A Hub of Collective Knowledge knows no bounds. Join
                  interactive learning sessions, collaborative projects, and
                  skill-building initiatives. Empower yourself through the
                  collective wisdom of the village.
                </p>
                <img
                  src="assets/images/service/service-4.jpg"
                  alt="service image"
                />
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
              </div>
            </div>
            {/*=== Service Item ===*/}
            <div className="single-service-item-three mb-40">
              <div className="content">
                <h3 className="title">
                  <a href="#">Shared Growth Stories</a>
                </h3>

                <p>
                  Explore stories of personal and professional growth within our
                  village. Learn how individuals have flourished through
                  co-learning experiences, gaining skills that contribute to
                  their overall well-being.
                </p>
                <img
                  src="assets/images/service/service-5.jpg"
                  alt="service image"
                />
                <div className="meta">
                  <span className="icon">
                    <i className="flaticon-blanket" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-cat" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-tent" />
                  </span>
                  <span className="icon">
                    <i className="flaticon-fire" />
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Service Section ======*/}

      {/*====== End Partners Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
    </Layout>
  );
};
export default Lifestyle;
