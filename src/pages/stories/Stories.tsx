import "./Stories.css";

import ImageComponent from "../../components/ImageComponent/ImageComponent";
import { ImgComData } from "../../ImgCompData";

import StoriesHeader from "../../components/StoriesHeader/StoriesHeader";

export default function Stories() {
  return (
    <>
      <StoriesHeader />
      <div className="stories-flex">
        <div className="stories-grid">
          {ImgComData.map((item) => (
            <ImageComponent
              img={item.img}
              title={item.title}
              creator={item.creator}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export {};
