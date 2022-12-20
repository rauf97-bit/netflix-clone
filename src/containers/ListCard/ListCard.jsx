import "./listcard.scss";
import img from "../../assets/images/bcg.jpg";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import trailer from '../../assets/videos/demo.mp4'
function ListCard({ num }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="list_card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // style={{ left : isHovered && num * 230  - 50 + num * 5}}
    >
      <img src={img} alt="" />
      {
        isHovered &&
        (
          <>

      <video src={trailer} autoPlay={true} loop></video>
      <div className="movie_info">
        <div className="icons">
          <PlayArrow className="movie_icon" />
          <Add className="movie_icon" />
          <ThumbDownOutlined className="movie_icon" />
          <ThumbUpOutlined className="movie_icon" />
        </div>
        <div className="movie_title">
          <span>1hr 35mins</span>
          <span className="limit">+16</span>
          <span>11938</span>
        </div>
        <div className="movie_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          dolorem error laudantium cupiditate expedita adipisci possimus
          incidunt? Nemo, deleniti natus?
          <p className="genre">Action</p>
        </div>
      </div>
          </>
        )
      }
    </div>
  );
}

export default ListCard;
