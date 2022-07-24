import React, { useEffect, useState } from "react";
import getDate from "../utils/getDate";
import Typography from "@mui/material/Typography";

const Date = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const dateFiltered = getDate();
    setDate(dateFiltered);
  }, []);

  return (
    <Typography fontSize={14} variant="span">
      {date}
    </Typography>
  );
};

export default Date;
