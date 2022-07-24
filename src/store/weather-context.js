import React from "react";

const WeatherContext = React.createContext({
  items: {},
  status: {},
  changeStatus: (value) => {},
  fetchItems: (items) => {}
});

export default WeatherContext;
