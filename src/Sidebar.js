import searchIcon from "./Images/search-icon.svg";
import locationIcon from "./Images/location-icon.svg";
import locationIconSm from "./Images/location-icon-sm.svg";
import cloudBackground from "./Images/Cloud-background.png";
import closeBtn from "./Images/close-btn.svg";
import rightIcon from "./Images/right-icon.svg";
import { useState } from "react";
// import clearDay from "./Images/clear-day.png";
// import images from "./Images";

function Sidebar(props) {
  const [inputText, setInputText] = useState("");

  function openSearch() {
    document
      .querySelector(".search-container-navigation")
      .classList.remove("search-container-navigation-close");
  }
  function closeSearch() {
    document
      .querySelector(".search-container-navigation")
      .classList.add("search-container-navigation-close");
  }
  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-background">
        <img alt="" src={cloudBackground} />
      </div>

      <div className="search-btn-gray-container">
        <button className="search-btn-gray" onClick={openSearch}>
          Search for places
        </button>
        <img
          alt=""
          src={locationIcon}
          className="location-icon"
          onClick={() => {
            props.getLocation();
          }}
        />
      </div>

      <div className="today-weather-container">
        <div className="today-weather-icon-container">
          <img
            alt=""
            src={require(`./Images/${props.myWeather.days[0].icon}.png`)}
          />
        </div>
        <div className="today-weather-temperature-container">
          <span className="today-weather-temperature-value">
            {props.isFalh
              ? Math.trunc((props.myWeather.days[0].temp * 9) / 5 + 32)
              : props.myWeather.days[0].temp}
          </span>
          {props.isFalh ? "℉" : "℃"}
        </div>
        <div className="today-weather-description-container">
          {props.myWeather.days[0].icon.split("-").join(" ")}
        </div>
        <div className="today-weather-date-container">
          Today · {props.nextDay(0)}
        </div>
        <div className="today-weather-location-container">
          <img alt="" src={locationIconSm} className="location-icon-sm" />{" "}
          {props.myWeather.resolvedAddress}
        </div>
      </div>

      <div className="search-container-navigation search-container-navigation-close">
        <img
          alt=""
          src={closeBtn}
          className="close-btn"
          onClick={closeSearch}
        />
        <div className="search-container">
          <div className="search-box-container">
            <img alt="" src={searchIcon} className="search-icon" />
            <input
              type="text"
              className="search-box"
              placeholder="search locations"
              value={inputText}
              onChange={handleChange}
            />
          </div>
          <button
            className="search-btn-blue"
            onClick={() => {
              props.fetchData(inputText);
              closeSearch();
              setInputText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="city-suggestions-container">
          <button
            className="city-suggestions-item"
            onClick={() => {
              props.fetchData("London, UK");
              closeSearch();
            }}
          >
            London <img alt="" src={rightIcon} className="right-icon" />
          </button>
          <button
            className="city-suggestions-item"
            onClick={() => {
              props.fetchData("Barcelona, Spain");
              closeSearch();
            }}
          >
            Barcelona <img alt="" src={rightIcon} className="right-icon" />
          </button>
          <button
            className="city-suggestions-item"
            onClick={() => {
              props.fetchData("Long Beach, US");
              closeSearch();
            }}
          >
            Long Beach <img alt="" src={rightIcon} className="right-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
