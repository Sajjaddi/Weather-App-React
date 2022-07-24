import React, { useReducer } from "react";
import WeatherContext from "./weather-context";

const defaultWeatherState = {
  items: {},
  status: {
    isLoading: true,
    isAlert: false,
    statusFetch: false,
  },
};

const weatherReducer = (state, action) => {
  switch (action.type) {
    case "FETCH": {
      const prevStatus = state.status;
      let updatedItems = {
        ...prevStatus,
        ...action.items,
      };
      return {
        items: updatedItems,
        status: state.status,
      };
    }
    case "STATUS": {
      const prevStatus = state.status;
      let updatedItems = {
        ...prevStatus,
        ...action.items,
      };
      return {
        items: state.items,
        status: updatedItems,
      };
    }
  }
};

const WeatherProvider = ({ children }) => {
  const [weatherState, dispatchWeatherAction] = useReducer(
    weatherReducer,
    defaultWeatherState
  );

  const fetchItemHandler = (items) => {
    dispatchWeatherAction({ type: "FETCH", items: items });
  };

  const changeStatus = (items) => {
    dispatchWeatherAction({ type: "STATUS", items: items });
  };

  const weatherContext = {
    items: weatherState.items,
    status: weatherState.status,
    changeStatus: changeStatus,
    fetchItems: fetchItemHandler,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
