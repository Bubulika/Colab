import rectangle from "./Rectangle.png";
import rect from "./rect (2).png";
import "./AfterHeader.css";

export default function AfterHeader({
  img,
  title,
  paragraph,
  imgtab,
  imgdesk,
}: {
  img: string;
  title: string;
  paragraph: string;
  imgtab: string;
  imgdesk: string;
}) {
  return (
    <div className="after-header-main-div">
      <div className="features-img-div">
        <img className="img" src={img} alt="alt-img"></img>
        <img className="imgtab" src={imgtab} alt="alt-img"></img>
        <img className="imgdesk" src={imgdesk} alt="alt-img"></img>
      </div>
      <div className="asiprocenti">
        <div className="after-features-img">
          <img className="rect" src={rectangle} alt="alt-img"></img>
          <img className="rectangle" src={rect} alt="alt-img"></img>

          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export {};
