import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import "./Header.css";
import "../global/global.css";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

export default function Header() {
  const [navigation, setNavigation] = useState(true);
  const [Sdisplay, setSdisplay] = useState("flex");
  const searchInput = useRef(null);
  const display = useRef(Sdisplay);
  const navToggler = () => {
    if (Sdisplay === "flex") {
      setSdisplay("none");
    } else if (Sdisplay === "none") {
      setSdisplay("flex");
    }
  };

  const menuToggler = () => {
    if (navigation) {
      setNavigation(false);
    } else {
      setNavigation(true);
    }
    if (searchInput.current.placeholder === "") {
      searchInput.current.placeholder = "Search..";
    } else {
      searchInput.current.placeholder = "";
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 720 && Sdisplay === "none") {
        setSdisplay("flex");
      } else if (window.innerWidth < 720 && Sdisplay === "flex") {
        setSdisplay("none");
      }
    }

    window.addEventListener("resize", handleResize);
  });
  useEffect(() => {
    if (window.innerWidth < 720 && display.current === "flex") {
      setSdisplay("none")}
  },[]);
  return (
    <div className="header" detail="Main Container of the Header">
      <div className="navigation" detail="Container of navigation bar">
        <div className="logoAndButton">
          <img src={logo} height="40px" width="90px" alt="logo prpsons" />
          <button className="navButton" onClick={navToggler}>
            <MenuOutlined style={{ fontSize: "26px", color: "#F2F2F2" }} />
          </button>
        </div>
        {navigation && (
          <div className="navigation" style={{ display: Sdisplay }}>
            <hr className="noneForPc" />
            <input
              className="noneForPc searchMobile"
              type="search"
              name="search"
              placeholder="Search .."
            />
            <hr className="noneForPc" />

            <a href="/">Bulbs</a>
            <hr className="noneForPc" />

            <a href="/">TV </a>
            <hr className="noneForPc" />

            <a href="/">Fan </a>
            <hr className="noneForPc" />

            <a href="/">Geyser </a>
            <hr className="noneForPc" />

            <a href="/">Kitchen </a>
            <hr className="noneForPc" />
            <a href="/">Power Tool </a>
            <hr className="noneForPc" />
            <a href="/">Electrical </a>
            <hr className="noneForPc" />
            <a href="/">W Machine </a>
            <hr className="noneForPc" />
          </div>
        )}
        <button
          className="searchButton"
          onClick={() => {
            searchInput.current.focus();
          }}
        >
          <SearchOutlined style={{ fontSize: "22px", color: "#F2F2F2" }} />{" "}
        </button>
        <input
          className="searchButton"
          ref={searchInput}
          onFocus={menuToggler}
          onBlur={menuToggler}
          type="text"
          name="search"
          placeholder=""
        />
      </div>
    </div>
  );
}
