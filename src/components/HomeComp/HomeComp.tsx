import "./HomeComp.css";
import rect from "./Rectangle.png";
import line from "./Path 3.png";
import arrow from "./Path 4.png";
import lineblack from "./black.png";
import arrowblack from "./black1.png";
import rect2 from "./rect2.png";
export default function HomeComp() {
  return (
    <div className="home-main-div">
      <div className="homepage-div">
        <div className="home-img"></div>
        <div className="home-title">
          <img className="home-rect" src={rect} alt="alt-img"></img>
          <img className="home-rect2" src={rect2} alt="alt-img"></img>
          <h1 className="home-h1">Create and share your photo stories.</h1>
          <p className="home-paragraph">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className="home-wrapper">
            <div className="home-wrapper-invite">GET AN INVITE</div>
            <img className="home-line" src={line} alt="alt-img"></img>
            <img className="home-arrow" src={arrow} alt="alt-img"></img>
          </div>
        </div>
      </div>

      <div className="homepage-div2">
        <div className="home-img2"></div>
        <div className="home-title1">
          <h1 className="home-h11">BEAUTIFUL STORIES EVERY TIME</h1>
          <p className="home-paragraph1">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className="home-wrapper">
            <div className="home-wrapper-invite1">VIEW THE STORIES</div>
            <img className="home-line" src={lineblack} alt="alt-img"></img>
            <img className="home-arrow" src={arrowblack} alt="alt-img"></img>
          </div>
        </div>
      </div>

      <div className="homepage-div3">
        <div className="home-img3"></div>
        <div className="home-title1">
          <h1 className="home-h11">DESIGNED FOR EVERYONE</h1>
          <p className="home-paragraph1">
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div className="home-wrapper">
            <div className="home-wrapper-invite1">VIEW THE STORIES</div>
            <img className="home-line" src={lineblack} alt="alt-img"></img>
            <img className="home-arrow" src={arrowblack} alt="alt-img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export {};
