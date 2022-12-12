import "./playlist.scss";
import ListCard from "../../containers/ListCard/ListCard";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";

function Playlist() {
  const [sliderNumber, setSliderNumber] = useState(0);
  const gallery = useRef();
  const handleClick = (direction) => {
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      const slidePosition = gallery.current.getBoundingClientRect().x - 100;
      gallery.current.style.transform = `translateX(${240 + slidePosition}px)`;
    }
    if (direction === "right" && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1);
      const slidePosition = gallery.current.getBoundingClientRect().x - 100;
      gallery.current.style.transform = `translateX(${-240 + slidePosition}px)`;
    }
  };
  return (
    <div className="wrapper">
      <div className="playlist">
        <p className="title">Continue Playing...</p>
        <div className="container">
          <ArrowBackIosOutlined
            className="arrow left"
            onClick={() => handleClick("left")}
          />
          <div className="gallery" ref={gallery}>
            <ListCard num={1} />
            <ListCard num={2} />
            <ListCard num={3} />
            <ListCard num={4} />
            <ListCard num={5} />
            <ListCard num={6} />
            <ListCard num={7} />
            <ListCard num={8} />
            <ListCard num={9} />
            <ListCard num={10} />
          </div>
          <ArrowForwardIosOutlined
            className="arrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default Playlist;
