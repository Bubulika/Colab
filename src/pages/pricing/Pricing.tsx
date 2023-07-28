import "./Pricing.css";
import AfterHeader from "../../components/AfterHeader/AfterHeader";
import BeforeFooter from "../../components/BeforeFooter/BeforeFooter";
import img from "../../assets/pricing/mobile/hero.jpg";
import imgtab from "../../assets/pricing/tablet/hero.jpg";
import imgdesk from "../../assets/pricing/desktop/hero.jpg";
import PricingComponent from "../../components/PricingComponent/PricingComponent";
import PricingTable from "../../components/PricingTable/PricingTable";

export default function Pricing() {
  return (
    <>
      <AfterHeader
        title={"PRICING"}
        paragraph={
          "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        }
        img={img}
        imgtab={imgtab}
        imgdesk={imgdesk}
      />
      <PricingComponent />
      <PricingTable />
      <BeforeFooter />
    </>
  );
}

export {};
