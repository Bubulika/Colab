import "./StoriesHeader.css";
import storyMainImg from "../../assets/stories/mobile/moon-of-appalacia.jpg";
import storyMainImg1 from "../../assets/stories/tablet/moon-of-appalacia.jpg";
import storyMainImg2 from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import arrow from "./Path 3.png";
import line from "./Path 4.png";

export default function StoriesHeader() {
  return (
    <div className="header-img">
      <div className="img-moon-div">
        <img className="img-moon" src={storyMainImg}></img>
      </div>
      <div className="img-moon-div1">
        <img className="img-moon" src={storyMainImg1}></img>
      </div>
      <div className="img-moon-div2">
        <img className="img-moon" src={storyMainImg2}></img>
      </div>
      <div className="after-moon">
        <h4 className="last-month">LAST MONTH’S FEATURED STORY</h4>
        <h1 className="aft-moon-h1">HAZY FULL MOON OF APPALACHIA</h1>
        <div className="aft-moon-wrapper">
          <p>March 2nd 2020</p>
          <h5>by John Appleseed</h5>
        </div>
        <p className="moon-paragraph">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <div className="moon-read-story-wrapper">
          <div className="moon-read-story">READ THE STORY</div>
          <div className="moon-main-arrow">
            <img src={arrow}></img>

            <img className="rotate" src={line}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
