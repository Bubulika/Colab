import "./PricingComponent.css";
import rect from "./re.png";
import vertical from "./vertical.png";
import horizontal from "./horizontal.png";
import { useState } from "react";

export default function PricingComponent() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="pricing">
        <div className="pricing-button-div">
          <h5 className={isVisible ? "pricing-month opacity" : "pricing-month"}>
            Monthly
          </h5>
          <button
            className="pricing-btn"
            onClick={() => setIsVisible(!isVisible)}
          >
            <div className={isVisible ? "circle-right" : "circle-left"}></div>
          </button>
          <h5 className={isVisible ? "pricing-year" : "pricing-year opacity"}>
            Yearly
          </h5>
        </div>
      </div>
      <div className="pricing-card-main-div">
        <div className="pricing-card">
          <h3 className="pricing-card-title">Basic</h3>
          <p className="pricing-card-paragraph">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <div className="pricing-money-abs">
            <h1 className="pricing-card-money">
              {isVisible ? "$190.00" : "$19.00"}
            </h1>
            <p className="pricing-card-par">
              {isVisible ? "per year" : "per month"}
            </p>
          </div>

          <button className="pricing-card-btn">PICK PLAN</button>
        </div>
        <div className="pricing-card-black-div">
          <img className="horizontal" src={horizontal}></img>
          <div className="pricing-card-black">
            <img className="pricing-rect" src={rect}></img>
            <img className="vertical" src={vertical}></img>
            <h3 className="pricing-card-title-black">Pro</h3>
            <p className="pricing-card-paragraph-black">
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <div className="pricing-money-abs">
              <h1 className="pricing-card-money-black">
                {isVisible ? "$390.00" : "$39.00"}
              </h1>
              <p className="pricing-card-par-black">
                {isVisible ? "per year" : "per month"}
              </p>
            </div>
            <button className="pricing-card-btn-black">PICK PLAN</button>
          </div>
        </div>

        <div className="pricing-card">
          <h3 className="pricing-card-title">Business</h3>
          <p className="pricing-card-paragraph">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <div className="pricing-money-abs">
            <h1 className="pricing-card-money">
              {isVisible ? "$990.00" : "$99.00"}
            </h1>
            <p className="pricing-card-par">
              {isVisible ? "per year" : "per month"}
            </p>
          </div>
          <button className="pricing-card-btn">PICK PLAN</button>
        </div>
      </div>
    </>
  );
}

export {};
