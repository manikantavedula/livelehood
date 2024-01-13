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

      {/*====== Start Hero Section ======*/}
      <section id="habitat" className="hero-section position-relative">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-four">
          <div className="shape top-0">
            <span>
              <img src="assets/images/hero/map.png" alt />
            </span>
          </div>
          <div className="container mt-30">
            <div className="row align-items-center">
              <div className="col-xl-7">
                {/*=== Hero Content ===*/}
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

              {/* <div className="big-text pt-100 wow fadeInDown">
                <img src="assets/images/bg/adventure.png" alt="Adventure" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Hero Section ======*/}

      <section className="service-section-two black-bg pt-30 pb-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="section-title text-center text-white wow fadeInDown mb-10">
                <span className="sub-title" style={{ fontWeight: "bold" }}>
                  Vision
                </span>
                <h4>
                  A collaborative & supportive ecosystem with a Holistic
                  Approach fostering a better Lifestyle & LiveLEhood for
                  LiveLEhooders
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section gray-bg pt-100 pb-100">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-6">
              <div className="section-title mb-25 wow fadeInLeft">
                <span
                  className="sub-title sub-title-black"
                  style={{ fontWeight: "bold" }}
                >
                  Motto
                </span>
                <h3>HEAL: Health, Environment And Learning</h3>
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
      {/*====== End Features Section ======*/}
      <section className="hero-section position-relative">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-four">
          <div className="shape top-0">
            <span>
              <img src="assets/images/hero/map.png" alt />
            </span>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 d-xl-block d-none">
                <div
                  className="hero-image wow fadeInRight"
                  data-wow-delay=".4s"
                >
                  <img
                    src="assets/images/hero/hero-five-img-my.png"
                    alt="hero image"
                  />
                </div>
              </div>
              <div className="col-xl-7">
                {/*=== Hero Content ===*/}
                <div className="hero-content">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <span style={{ fontWeight: "bold" }}>About Us</span>
                  </span>
                  <h3 className="wow fadeInDown" data-wow-delay=".5s">
                    LiveLEhood Habitat is a community-driven space endeavors to
                    create a social and environmentally sustainable ecosystem.
                    <br />
                    <br />
                    <span style={{ color: "#e5af54" }}>
                      An alternative space that offers a collaborative and
                      creative atmosphere for LiveLEhooders' to co-live/
                      learn/earn.
                    </span>
                    <br />
                    <br />
                    We believe in growing together and to build the community
                    through a holistic approach to life.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      {/* <GallerySection /> */}

      {/*====== Start We Section ======*/}
      <section id="lifestyle" className="who-we-section">
        <div className="hero-wrapper-four">
          <div className="container">
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
      <section className="service-section pt-10 pb-60">
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

      {/*====== Start What We Section ======*/}
      <section id="livelehood" className="we-section">
        <div className="">
          <div className="container">
            <div className="row align-items-xl-center">
              <div className="col-xl-6 order-2 order-xl-1">
                {/*=== We Image Box ===*/}
                <div className="we-two_image-box mb-20">
                  <div className="row align-items-end">
                    <div className="col-md-6">
                      {/*=== We Image ===*/}
                      <div className="we-image mb-30">
                        <img
                          src="assets/images/gallery/we-3.png"
                          alt="we Image"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/*=== We Image ===*/}
                      <div className="we-image mb-30">
                        <img
                          src="assets/images/gallery/we-4.png"
                          alt="we Image"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      {/*=== We Image ===*/}
                      <div className="we-image mb-30 pr-lg-30 text-md-end">
                        <img
                          src="assets/images/gallery/we-5.png"
                          alt="we Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 order-1 order-xl-2">
                {/*=== We Content Box ===*/}
                <div className="we-content-box pl-lg-50 mb-10">
                  {/*=== Section Title ===*/}
                  <div className="section-title mb-30">
                    <span className="sub-title">LiveLEhood</span>
                    <h4>
                      A collaborative Co-Work Habitat nurturing & promoting
                      Individuals, Entreprenuers & Entrepreneurship
                    </h4>
                  </div>
                  {/*=== Features List ===*/}
                  <div className="features-list_one">
                    {/*=== Single Features List ===*/}
                    <div className="single-features-list mb-40">
                      <div className="icon-inner d-flex align-items-center">
                        <div className="icon-check">
                          <i className="fas fa-badge-check" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-quote" />
                        </div>
                      </div>
                      <div className="content">
                        <h4>Co-Earning Opportunities (LiveLEhood)</h4>
                        <p>
                          Economic Prosperity Through Collaboration Participate
                          in co-earning opportunities that transcend traditional
                          models.
                        </p>
                      </div>
                    </div>

                    {/*=== Single Features List ===*/}
                    <div className="single-features-list mb-40">
                      <div className="icon-inner d-flex align-items-center">
                        <div className="icon-check">
                          <i className="fas fa-badge-check" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-award" />
                        </div>
                      </div>
                      <div className="content">
                        <h4>Collaborate on projects</h4>
                        <p>
                          Engage in shared economic activities, and witness
                          firsthand the power of collective prosperity.
                        </p>
                      </div>
                    </div>
                    {/*=== Single Features List ===*/}
                    <div className="single-features-list mb-40">
                      <div className="icon-inner d-flex align-items-center">
                        <div className="icon-check">
                          <i className="fas fa-badge-check" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-best-price" />
                        </div>
                      </div>
                      <div className="content">
                        <h4>Equitable Profit-Sharing</h4>
                        <p>
                          Experience a fair and equitable revenue-sharing model
                          that rewards collaboration.
                        </p>
                      </div>
                    </div>

                    {/*=== Single Features List ===*/}
                    <div className="single-features-list mb-40">
                      <div className="icon-inner d-flex align-items-center">
                        <div className="icon-check">
                          <i className="fas fa-badge-check" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-reviews" />
                        </div>
                      </div>
                      <div className="content">
                        <h4>Contributions</h4>
                        <p>
                          Your contributions to the village directly contribute
                          to its economic vibrancy and shared success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="wee">
        <PageBanner pageTitle={"WEE"} />
      </div>

      <div id="heal">
        <PageBanner pageTitle={"HEAL"} />
      </div>
    </Layout>
  );
};
export default Index4;
