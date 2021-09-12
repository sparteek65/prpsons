import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RightOutlined,LeftOutlined } from '@ant-design/icons';
import './Slider.css'
export default function Slider(props) {

    const CustomRightArrow = ({ onClick, ...rest }) => {
        
        // onMove means if dragging or swiping in progress.
        return <button className="Sbutton" onClick={() => onClick()} ><RightOutlined /></button>;
      };

      const CustomLeftArrow = ({ onClick, ...rest }) => {
       
        // onMove means if dragging or swiping in progress.
        return <button className="SbuttonLeft" onClick={() => onClick()} ><LeftOutlined /></button>;
      };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: props.itemsDesktop,
      slidesToSlide: props.itemsDesktop, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: props.itemsTablet,
      slidesToSlide: props.itemsTablet, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: props.itemsMobile,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
      <div className="slider">

<Carousel infinite={true} responsive={responsive} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow/>}>
{props.children}
  
</Carousel>
    </div>

  );
}
