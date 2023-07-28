import "./Home.css";
import "../features/Features.css";
import HomeComp from "../../components/HomeComp/HomeComp";
import ImageComponent from "../../components/ImageComponent/ImageComponent";
import { ImgComData } from "../../ImgCompData";
import { featureArray } from "../../data";

export default function Home() {
  return (
    <>
      <HomeComp />
      <div className="home-stories">
        <div className="home-stories-child">
          {ImgComData.slice(0, 4).map((item) => (
            <ImageComponent
              img={item.img}
              title={item.title}
              creator={item.creator}
              date={item.date}
            />
          ))}
        </div>
      </div>
      <div className="features-info-main-div">
        <div className="features-grid">
          {featureArray.slice(0, 3).map((item) => (
            <div className="features-child-div">
              <img src={item.icon}></img>
              <h3>{item.offer}</h3>
              <p>{item.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export {};
