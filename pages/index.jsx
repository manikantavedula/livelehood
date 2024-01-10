import Layout from "@/src/layout/Layout";
import {
  partnerSliderOne,
  sliderActive3Item,
  sliderActive5Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Home3Slider from "@/src/components/sliders/Home3";
import Link from "next/link";
import { home1Slider } from "@/src/sliderProps";
import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index4 = () => {
  return (
    <Layout header={5} noFooter>
      <div className="hero-wrapper black-bg mt-0">
        <Home3Slider />
      </div>
    </Layout>
  );
};
export default Index4;
