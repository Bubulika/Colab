import "./PricingTable.css";
import { pricingArr } from "../../data.js";

export default function PricingTable() {
  return (
    <div className="pricing-table-main">
      <div className="pricing-table">
        <h2 className="table-h2">THE FEATURES</h2>
        <div className="table-main-line"></div>

        {pricingArr.map((item) => (
          <>
            <p className="table-parag">{item.header}</p>
            <div className="icons-title-flex">
              <div className="icons-line">
                <h5 className="icon-title">BASIC</h5>
                <img src={item.icon}></img>
              </div>
              <div className="icons-line">
                <h5 className="icon-title">PRO</h5>
                <img src={item.icon2}></img>
              </div>
              <div className="icons-line">
                <h5 className="icon-title">BUSINESS</h5>
                <img src={item.icon3}></img>
              </div>
            </div>

            <div className="border"></div>
          </>
        ))}
      </div>

      <div className="pricing-table-tab">
        <h1 className="compare">COMPARE</h1>
        <div className="table-tablet-main">
          <div className="samasormoci">
            <h3 className="table-tab-title">THE FEATURES</h3>
          </div>
          <div className="danarcheni">
            <h4>BASIC</h4>
            <h4>PRO</h4>
            <h4>BUSINESS</h4>
          </div>
        </div>
        <div className="table-tab-line"></div>
        {pricingArr.map((item) => (
          <>
            <div className="table-tablet-main1">
              <div className="samasormoci1">
                <h3 className="table-tab-title">{item.header}</h3>
              </div>
              <div className="danarcheni1">
                <img src={item.icon}></img>
                <img src={item.icon2}></img>
                <img src={item.icon3}></img>
              </div>
            </div>
            <div className="table-tablet-line"></div>
          </>
        ))}
      </div>
    </div>
  );
}

export {};
