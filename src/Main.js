import Footer from "./Footer";
import windIcon from "./Images/wind-icon.svg";

function Main(props) {
  const humStyle = {
    width: `${props.myWeather.days[0].humidity}%`,
  };

  return (
    <div className="main-container">
      <div className="main-display">
        <div className="temp-type-container" onClick={props.changeTemp}>
          <span
            className={
              props.isFalh
                ? "temp-type-item temp-type-celc"
                : "temp-type-item temp-type-celc temp-type-item-active"
            }
          >
            ℃
          </span>
          <span
            className={
              props.isFalh
                ? "temp-type-item temp-type-falh temp-type-item-active"
                : "temp-type-item temp-type-falh"
            }
          >
            ℉
          </span>
        </div>
        <div className="next-days-container">
          <div className="next-days-item">
            <h6 className="next-days-item-day">Tomorrow</h6>
            <img
              alt=""
              src={require(`./Images/${props.myWeather.days[1].icon}.png`)}
              className="next-days-item-img"
            />
            <div className="next-days-item-temps">
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[1].tempmin * 9) / 5 + 32)
                    : props.myWeather.days[1].tempmin
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[1].tempmax * 9) / 5 + 32)
                    : props.myWeather.days[1].tempmax
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
            </div>
          </div>
          <div className="next-days-item">
            <h6 className="next-days-item-day">{props.nextDay(2)}</h6>
            <img
              alt=""
              src={require(`./Images/${props.myWeather.days[2].icon}.png`)}
              className="next-days-item-img"
            />
            <div className="next-days-item-temps">
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[2].tempmin * 9) / 5 + 32)
                    : props.myWeather.days[2].tempmin
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[2].tempmax * 9) / 5 + 32)
                    : props.myWeather.days[2].tempmax
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
            </div>
          </div>
          <div className="next-days-item">
            <h6 className="next-days-item-day">{props.nextDay(3)}</h6>
            <img
              alt=""
              src={require(`./Images/${props.myWeather.days[3].icon}.png`)}
              className="next-days-item-img"
            />
            <div className="next-days-item-temps">
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[3].tempmin * 9) / 5 + 32)
                    : props.myWeather.days[3].tempmin
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[3].tempmax * 9) / 5 + 32)
                    : props.myWeather.days[3].tempmax
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
            </div>
          </div>
          <div className="next-days-item">
            <h6 className="next-days-item-day">{props.nextDay(4)}</h6>
            <img
              alt=""
              src={require(`./Images/${props.myWeather.days[4].icon}.png`)}
              className="next-days-item-img"
            />
            <div className="next-days-item-temps">
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[4].tempmin * 9) / 5 + 32)
                    : props.myWeather.days[4].tempmin
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[4].tempmax * 9) / 5 + 32)
                    : props.myWeather.days[4].tempmax
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
            </div>
          </div>
          <div className="next-days-item">
            <h6 className="next-days-item-day">{props.nextDay(5)}</h6>
            <img
              alt=""
              src={require(`./Images/${props.myWeather.days[5].icon}.png`)}
              className="next-days-item-img"
            />
            <div className="next-days-item-temps">
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[5].tempmin * 9) / 5 + 32)
                    : props.myWeather.days[5].tempmin
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
              <span className="next-days-item-temp">
                {`${
                  props.isFalh
                    ? Math.trunc((props.myWeather.days[5].tempmax * 9) / 5 + 32)
                    : props.myWeather.days[5].tempmax
                }${props.isFalh ? "℉" : "℃"}`}
              </span>
            </div>
          </div>
        </div>
        <div className="today-highlights-container">
          <h1 className="today-highlights-header">Today's Highlights</h1>
          <div className="today-highlights-items-container">
            <div className="today-highlights-item wind-status">
              <h6 className="today-highlights-item-header">Wind status</h6>
              <div className="today-highlights-item-value">
                <span>{props.myWeather.days[0].windspeed}</span>mph
              </div>
              <div className="today-highlights-item-summary">
                <img alt="" src={windIcon} />
                WSW
              </div>
            </div>
            <div className="today-highlights-item humidity">
              <h6 className="today-highlights-item-header">Humidity</h6>
              <div className="today-highlights-item-value">
                <span>{props.myWeather.days[0].humidity}</span>%
              </div>
              <div className="today-highlights-item-summary">
                <div className="humidity-measurement-container">
                  <div className="humidity-measurement-labels-container">
                    <span className="humidity-measurement-label">0</span>
                    <span className="humidity-measurement-label">50</span>
                    <span className="humidity-measurement-label">100</span>
                  </div>
                  <div className="humidity-measurement-reading-container">
                    <div
                      className="humidity-measurement-reading"
                      style={humStyle}
                    ></div>
                  </div>
                  <div className="humidity-measurement-reading-unit">%</div>
                </div>
              </div>
            </div>
            <div className="today-highlights-item visibility">
              <h6 className="today-highlights-item-header">Visibility</h6>
              <div className="today-highlights-item-value">
                <span>{props.myWeather.days[0].visibility}</span>miles
              </div>
            </div>
            <div className="today-highlights-item air-pressure">
              <h6 className="today-highlights-item-header">Air pressure</h6>
              <div className="today-highlights-item-value">
                <span>{props.myWeather.days[0].pressure}</span>mb
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
