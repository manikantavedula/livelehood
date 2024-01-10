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

const Livelehood = () => {
  return (
    <Layout header={3}>
      {/*====== Start What We Section ======*/}
      <section className="we-section">
        <div className="hero-wrapper-four">
          <div className="container mt-40">
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
      {/*====== End What We Section ======*/}

      {/*====== End Partners Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
    </Layout>
  );
};
export default Livelehood;
