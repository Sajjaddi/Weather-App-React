import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const DetailItem = ({ title, detail, ...props }) => {
  return (
    <li>
      <Stack flexDirection={"row"} justifyContent="space-between">
        <Typography {...props}>{title}</Typography>
        <Typography {...props}>{detail}</Typography>
      </Stack>
    </li>
  );
};

export default DetailItem;
