import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./assets/css/index.min.css";
import WeatherProvider from "./store/WeatherProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
);
