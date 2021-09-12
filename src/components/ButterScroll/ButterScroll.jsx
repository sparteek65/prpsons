import { useRef, useEffect } from "react";
import "./ButterScroll.css";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
export default function ButterScroll(props) {
  const butterScroll = useRef(null);
  const leftButton = useRef(null);
  const rightButton = useRef(null);

  const handleScroll = () => {
    if (
      butterScroll.current.scrollLeft + butterScroll.current.offsetWidth >=
      butterScroll.current.scrollWidth-30
    ) {
      rightButton.current.style.color = "white";
      leftButton.current.style.color = "black";
    } else if (butterScroll.current.scrollLeft === 0) {
      leftButton.current.style.color = "white";
      rightButton.current.style.color = "black";
    } else {
      rightButton.current.style.color = "black";

      leftButton.current.style.color = "black";
    }
  };

  useEffect(() => {
    if (butterScroll.current.scrollLeft === 0) {
      leftButton.current.style.color = "white";
    }
    if (butterScroll.current.scrollWidth === butterScroll.current.offsetWidth) {
      leftButton.current.style.color = "white";
      rightButton.current.style.color = "white";
    }
  }, []);

  const buttonStyle = { fontSize: "25px" };

  const handleLeftScroll = () => {
    butterScroll.current.scrollBy(-butterScroll.current.offsetWidth, 0);
  };

  const handleRightScroll = () => {
    butterScroll.current.scrollBy(butterScroll.current.offsetWidth, 0);
  };

  return (
    <div className="ButterContainer">
      <div className="ButterButton">
        <LeftCircleFilled
          style={buttonStyle}
          ref={leftButton}
          onClick={handleLeftScroll}
        />
      </div>
      <div className="ButterScroll" ref={butterScroll} onScroll={handleScroll}>
        {props.children}
      </div>
      <div className="ButterButton">
        <RightCircleFilled
          style={buttonStyle}
          ref={rightButton}
          onClick={handleRightScroll}
        />
      </div>
    </div>
  );
}
