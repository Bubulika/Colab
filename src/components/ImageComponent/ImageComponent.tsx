import "./ImageComponent.css";
import arrow from "./Path 4.png";
import line from "./Path 3.png";
import rect from "./Rectangle.png";

export default function ImageComponent({
  img,
  date,
  title,
  creator,
}: {
  img: string;
  date: string;
  title: string;
  creator: string;
}) {
  return (
    <div className="img-comp-div">
      <img className="img-comp-main-img" src={img} alt="alt-img" />
      <img className="imagecomponent-rect" src={rect} alt="alt-img"></img>

      <div className="img-comp-absolute">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{creator}</p>
        <div className="line"></div>
        <div className="img-comp-readstory">
          <h3>READ STORY</h3>
          <div className="img-component-icon-wrapper">
            <img src={line} alt="alt-img"></img>
            <img className="img2" src={arrow} alt="alt-img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
