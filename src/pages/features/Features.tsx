import "./Features.css";

import img from "../../assets/features/mobile/hero.jpg";
import imgtab from "../../assets/features/tablet/hero.jpg";
import imgdesk from "../../assets/features/desktop/hero.jpg";
import BeforeFooter from "../../components/BeforeFooter/BeforeFooter";
import AfterHeader from "../../components/AfterHeader/AfterHeader";
import { featureArray } from "../../data.js";
export default function Features() {
  return (
    <div className="features-container">
      <AfterHeader
        title={"FEATURES"}
        paragraph={
          "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        }
        img={img}
        imgtab={imgtab}
        imgdesk={imgdesk}
      />
      <div className="features-info-main-div">
        <div className="features-grid">
          {featureArray.map((item) => (
            <div className="features-child-div">
              <img src={item.icon} alt="alt-img"></img>
              <h3>{item.offer}</h3>
              <p>{item.bio}</p>
            </div>
          ))}
        </div>
      </div>
      <BeforeFooter />
    </div>
  );
}

export {};
