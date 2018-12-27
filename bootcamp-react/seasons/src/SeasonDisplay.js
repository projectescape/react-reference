import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Lets eat ice-cream",
    iconName: "sun"
  },
  winter: {
    text: "Its chilly!!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  // var text = season === "winter" ?  : ;
  // var iconName = season === "winter" ?  : ;
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={"season-display " + season}>
      <i className={iconName + " icon massive icon-left"} />
      <h1>{text}</h1>
      <i className={iconName + " icon massive icon-right"} />
    </div>
  );
};

export default SeasonDisplay;
