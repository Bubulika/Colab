import "./BeforeFooter.css";

import imgmob from "../../assets/shared/mobile/bg-beta.jpg";
import imgtab from "../../assets/shared/tablet/bg-beta.jpg";
import imgdesk from "../../assets/shared/desktop/bg-beta.jpg";
import line from "./Path 3.png";
import arrow from "./Path 4.png";
import rectangle from "./rect.png";
import rectangle1 from "./Rectangle.png";

export default function BeforeFooter() {
  return (
    <div className="features-footer">
      <img className="feat-foot-rect" src={rectangle}></img>
      <img className="feat-foot-rect1" src={rectangle1}></img>
      <img className="features-footer-mainc-img" src={imgmob} />
      <img className="features-footer-mainc-img2" src={imgtab}></img>
      <img className="features-footer-mainc-img3" src={imgdesk}></img>
      <div className="features-footer-abs">
        <h1>We’re in beta. Get your invite today!</h1>
        <div className="features-footer-wrapper">
          <h3>GET AN INVITE</h3>
          <div className="feature-footer-icon-wrapper">
            <img src={line}></img>
            <img className="img2" src={arrow}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export {};
