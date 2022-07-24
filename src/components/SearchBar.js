import Box from "@mui/material/Box";
import "../assets/css/SearchBar.min.css";
import React from "react";

const SearchBar = ({ inputSearchHandler, inputValue, fetchNewData }) => {
  const inputKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      fetchNewData();
    }
  };


  return (
    <Box
      className="input-container"
      sx={{
        width: { xs: "100%", md: "86%" },
      }}
    >
      <input
        type="text"
        value={inputValue}
        onKeyDown={(e) => inputKeyDownHandler(e)}
        onChange={(e) => inputSearchHandler(e.target.value)}
        placeholder="Another location"
      />
      <span className="input-changer"></span>
    </Box>
  );
};

export default SearchBar;
