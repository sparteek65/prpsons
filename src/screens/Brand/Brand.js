import BigCardNScroll from "../../components/Mixed/BigCardNScroll";
import HeadingNScroll from "../../components/Mixed/HeadingNScroll";
import "./Brand.css";

export default function Brand() {
  return (
    <div>
      <div className="brandLogo">
        <div
          style={{
            width: "300px",
            height: "100px",
            backgroundImage:
              "url(" +
              "https://www.pngitem.com/pimgs/b/2-24638_samsung-logo-png-transparent.png" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <HeadingNScroll />
      <BigCardNScroll
        id="washing_machine"
        heading="Samsung's Washing  Machines"
      />
      <BigCardNScroll heading="Samsung's Tv's" />
      <BigCardNScroll heading="Samsung's Tv's" />
      <BigCardNScroll heading="Samsung's Tv's" />
      <BigCardNScroll heading="Samsung's Tv's" />
      <div id="microwave">
        <BigCardNScroll heading="Samsung's Microwaves" />
      </div>
    </div>
  );
}
