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
    <Layout header={5}>
      <PageBanner pageTitle={"Lifestyle"} />
    </Layout>
  );
};
export default Lifestyle;
