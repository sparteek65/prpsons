import Slider from "../../components/Slider/Slider";
import BigCardNScroll from "../../components/Mixed/BigCardNScroll";
import HeadingNScroll from "../../components/Mixed/HeadingNScroll";

export default function Homepage() {
    return (
        <div>
            <Slider  itemsMobile={1} itemsDesktop={1} itemsTablet={1}>
        <div className="content">
          Save on Mac or iPad for college with education pricing. And get
          AirPods.1 Shop now
        </div>
        <div className="content">Item 2</div>
        <div className="content">Item 3</div>
      </Slider>

      <div className="bigHeading">
          <b style={{marginTop:"10px"}}><span style={{color:"grey"}}>Hii, Welcome to</span> PrpSons</b>
      </div>

      <HeadingNScroll                               heading="Choose the most Popular Categories"/>
      <HeadingNScroll heading="Our Brands" />
      <BigCardNScroll heading="Most Valuable Products"/>
      <BigCardNScroll heading="Our Best Picks"/>
      <BigCardNScroll heading="Discount alteast 30%"/>
        </div>
    )
}

