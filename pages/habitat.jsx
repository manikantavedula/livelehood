import Layout from "@/src/layout/Layout";
import {
  partnerSliderOne,
  sliderActive3Item,
  sliderActive5Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const habitat = () => {
  return (
    <Layout header={3}>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section position-relative">
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
                  {/* <p className="wow fadeInUp" data-wow-delay=".6s">
                    Harmony in Diversity: A Co-Existic Village for a Thriving
                    Lifestyle and Livelihood
                  </p> */}
                  {/*=== Hero Search ===*/}
                  {/* <div
                    className="hero-search-form mb-40 wow fadeInDown"
                    data-wow-delay=".7s"
                  >
                    <form className="booking-form-two">
                      <div className="form_group">
                        <span>Check In</span>
                        <input
                          type="date"
                          className="form_control datepicker"
                          placeholder="Check In"
                        />
                      </div>
                      <div className="form_group">
                        <span>Check Out</span>
                        <input
                          type="date"
                          className="form_control datepicker"
                          placeholder="Check Out"
                        />
                      </div>
                      <div className="form_group">
                        <span>Guest</span>
                        <label>
                          <i className="far fa-user-alt" />
                        </label>
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Guest"
                          name="text"
                        />
                      </div>
                      <div className="form_group">
                        <span>Accommodations</span>
                        <select className="wide">
                          <option value={1}>Classic Tent</option>
                          <option value={1}>Forest Camping</option>
                          <option value={1}>Small Trailer</option>
                          <option value={1}>Tree House Tent</option>
                          <option value={1}>Tent Camping</option>
                          <option value={1}>Couple Tent</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <button className="booking-btn">
                          Check Availability{" "}
                          <i className="far fa-angle-double-right" />
                        </button>
                      </div>
                    </form>
                  </div> */}
                  {/* <div
                    className="avatar-box wow fadeInUp"
                    data-wow-delay=".75s"
                  >
                    <img src="assets/images/about/avater.png" alt />
                    <span>35+ People booked their dream place</span>
                  </div> */}
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

      {/*====== End Hero Section ======*/}
      {/*====== Start Service Section ======*/}
      {/* <section
        className="cta-bg overlay bg_cover pt-150 pb-150"
        style={{
          backgroundImage: "url(assets/images/bg/cta-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="cta-content-box text-center text-white wow fadeInUp">
                <span
                  className="sub-title mb-35"
                  style={{ fontWeight: "bold" }}
                >
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
      </section> */}

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

          {/* <div className="big-text pt-10 wow fadeInDown">
            <img src="assets/images/bg/adventure.png" alt="Adventure" />
          </div> */}
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
            {/* <div className="col-lg-6">
              <div className="features-content-box pl-lg-70 wow fadeInRight">
                <p className="mb-25">
                  Sit amet consectetue integer eu tincidunt scelerisque. Sodales
                  volutpat neque fermentum alesuada scelerisque massa.
                </p>
                <div className="row justify-content-center">
                  <div className="col-sm-4 col-6">
                    <div className="counter-item mb-55">
                      <h2 className="number">
                        <Counter end={356} />+
                      </h2>
                      <p>Happy Traveler</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="counter-item mb-55">
                      <h2 className="number">
                        <Counter end={852} />+
                      </h2>
                      <p>Tent Sites</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="counter-item mb-55">
                      <h2 className="number">
                        <Counter end={99} />%
                      </h2>
                      <p>Positive Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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

      {/*====== Start Testimonial Section ======*/}
      {/* <section className="testimonial-section-two pt-100">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-5 order-2 order-xl-1">
              <div className="testimonial-image-box text-xl-left text-center wow fadeInLeft">
                <img
                  src="assets/images/testimonial/testimonial-2.png"
                  alt="Icon Image"
                />
              </div>
            </div>
            <div className="col-xl-7 order-1 order-xl-2">
              <Slider
                {...testimonialSliderOne}
                className="testimonial-slider-one pl-lg-55 mb-40 wow fadeInRight"
              >
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gw-testimonial-item">
                  <div className="testimonial-inner-content">
                    <div className="quote-rating-box">
                      <div className="icon">
                        <img
                          src="assets/images/testimonial/quote.png"
                          alt="quote icon"
                        />
                      </div>
                      <div className="ratings-box">
                        <h4>Quality Services</h4>
                        <ul className="ratings">
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                          <li>
                            <i className="fas fa-star" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      To take a trivial example which of usev undertakes
                      laborious physical exercise excepto obtain advantage from
                      has any right to find fault with man who chooses to enjoy
                    </p>
                    <div className="author-thumb-title">
                      <div className="author-thumb">
                        <img
                          src="assets/images/testimonial/author-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="author-title">
                        <h3 className="title">Douglas D. Hall</h3>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="blog-area pt-60 pb-60">
            <div className="row justify-content-center">
              <div className="col-xl-7">
                <div className="section-title text-center mb-45 wow fadeInDown">
                  <span className="sub-title">News &amp; Blog</span>
                  <h2>Amazing News &amp; Blog For Every Single Update</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-blog-post-three mb-40 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-7.jpg" alt="Blog Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">November 15, 2022</a>
                      </span>
                      <h3 className="title">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Meet Skeleton Svelte Taile Sind For Reactive UIs
                          </a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/blog-details">
                        <a className="main-btn filled-btn">
                          Read More
                          <i className="far fa-paper-plane" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-blog-post-three mb-40 wow fadeInDown">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-8.jpg" alt="Blog Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">November 15, 2022</a>
                      </span>
                      <h3 className="title">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Meet Skeleton Svelte Taile Sind For Reactive UIs
                          </a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/blog-details">
                        <a className="main-btn filled-btn">
                          Read More
                          <i className="far fa-paper-plane" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-blog-post-three mb-40 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img src="assets/images/blog/blog-9.jpg" alt="Blog Image" />
                  </div>
                  <div className="entry-content">
                    <div className="post-meta">
                      <span>
                        <i className="far fa-calendar-alt" />
                        <a href="#">November 15, 2022</a>
                      </span>
                      <h3 className="title">
                        <Link legacyBehavior href="/blog-details">
                          <a>
                            Meet Skeleton Svelte Taile Sind For Reactive UIs
                          </a>
                        </Link>
                      </h3>
                      <Link legacyBehavior href="/blog-details">
                        <a className="main-btn filled-btn">
                          Read More
                          <i className="far fa-paper-plane" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Partners Section ======*/}
      {/* <section className="partners-section black-dark-bg">
        <div className="container">
          <Slider
            {...partnerSliderOne}
            className="partner-slider-one pt-80 pb-50 wow fadeInUp"
          >
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-6.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-7.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-8.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-9.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-10.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-7.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      {/*====== End Partners Section ======*/}
    </Layout>
  );
};
export default habitat;
