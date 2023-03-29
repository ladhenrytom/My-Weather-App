import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  window.onload = () => {
    getLocation();
  };
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [isFalh, setIsFalh] = useState(false);
  const [myWeather, setMyWeather] = useState({
    days: [
      {
        temp: 0,
        icon: "partly-cloudy-day",
        tempmin: 0,
        tempmax: 1,
        windspeed: 0,
        humidity: 70,
        visibility: 0,
        pressure: 0,
      },
      {
        icon: "partly-cloudy-day",
        tempmin: 0,
        tempmax: 1,
      },
      {
        icon: "partly-cloudy-day",
        tempmin: 0,
        tempmax: 1,
      },
      {
        icon: "partly-cloudy-day",
        tempmin: 0,
        tempmax: 1,
      },
      {
        icon: "partly-cloudy-day",
        tempmin: 0,
        tempmax: 1,
      },
      {
        icon: "partly-cloudy-day",
        tempmin: 0,
        tempmax: 1,
      },
    ],
    resolvedAddress: "Lagos Nigeria",
  });

  function getLocation() {
    navigator.geolocation &&
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(
          `https://api.myptv.com/geocoding/v1/locations/by-position/${position.coords.latitude}/${position.coords.longitude}?language=en`,
          {
            method: "GET",
            headers: {
              apiKey:
                "RVVfYzRmYjU5OWJmZDA1NDM2Yzg1YTk4NGU1ZGQ1YWYwOTY6NmViYmJmNzQtZDQ3MS00NWE3LWEwZTUtMjY5N2Q0YjI5NGRm",
            },
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw response; //check the http response code and if isn't ok then throw the response as an error
            }

            //parse the result as JSON
            return response.json();
          })
          .then((response) => {
            //response now contains parsed JSON ready for use
            fetchData(
              response.locations[0].address.city ||
                `${position.coords.latitude},${position.coords.longitude}`
            );
          })
          .catch((errorResponse) => {
            // if (errorResponse.text) {
            //   //additional error information
            //   errorResponse.text().then((errorMessage) => {
            //     //errorMessage now returns the response body which includes the full error message
            //     alert(errorMessage);
            //     console.log(errorMessage);
            //   });
            // } else {
            //   //no additional error information
            // }
            alert("Couldn't get data. Invalid API key");
          });
      });
  }

  function nextDay(day) {
    let myDate = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(myDate.getDate() + day);
    return `${days[tomorrow.getDay()]} ${tomorrow.getDate()}, ${
      months[tomorrow.getMonth()]
    }`;
  }
  function dateRange(day) {
    let myDate = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(myDate.getDate() + day);
    return `${tomorrow.getFullYear()}-${
      tomorrow.getMonth() + 1
    }-${tomorrow.getDate()}`;
  }

  function changeTemp(e) {
    if (e.target.classList.contains("temp-type-celc")) {
      setIsFalh(false);
    } else if (e.target.classList.contains("temp-type-falh")) {
      setIsFalh(true);
    }
  }

  function processWeatherData(data) {
    setMyWeather(data);
  }

  // const location = "Lagos, Nigeria";
  function fetchData(location) {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${dateRange(
        0
      )}/${dateRange(5)}/?key=DKJD3D565WK2CVJJGATRKVQUY`,
      {
        method: "GET",
        headers: {},
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw response; //check the http response code and if isn't ok then throw the response as an error
        }

        //parse the result as JSON
        return response.json();
      })
      .then((response) => {
        //response now contains parsed JSON ready for use
        processWeatherData(response);
        // console.log(response);
      })
      .catch((errorResponse) => {
        if (errorResponse.text) {
          //additional error information
          errorResponse.text().then((errorMessage) => {
            //errorMessage now returns the response body which includes the full error message
            alert(errorMessage);
          });
        } else {
          //no additional error information
        }
      });
  }

  return (
    <div className="App">
      <Sidebar
        getLocation={getLocation}
        fetchData={fetchData}
        isFalh={isFalh}
        myWeather={myWeather}
        days={days}
        months={months}
        nextDay={nextDay}
      />
      <Main
        isFalh={isFalh}
        changeTemp={changeTemp}
        myWeather={myWeather}
        days={days}
        months={months}
        nextDay={nextDay}
      />
    </div>
  );
}

export default App;
