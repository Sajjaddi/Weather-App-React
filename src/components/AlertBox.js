import React, { useContext } from "react";
import Alert from "@mui/material/Alert";
import ReactDOM from "react-dom";
import WeatherContext from "../store/weather-context";
import Snackbar from "@mui/material/Snackbar";

const AlertBox = () => {
  const weatherCtx = useContext(WeatherContext);
  let title = "Success";
  let desc = "Fetch Data is Completed !";
  if (!weatherCtx.status.statusFetch) {
    title = "Error";
    desc = "Fetch data is Failed , Location is not Currect or Network Error !";
  }

  return ReactDOM.createPortal(
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      open={weatherCtx.status.isAlert}
      autoHideDuration={5000}
      onClose={() => weatherCtx.changeStatus({ isAlert: false })}
    >
      <Alert
        onClose={() => weatherCtx.changeStatus({ isAlert: false })}
        severity={title.toLowerCase()}
        sx={{ width: "100%" }}
      >
        {desc}
      </Alert>
    </Snackbar>,
    document.getElementById("alert")
  );
};
export default AlertBox;
