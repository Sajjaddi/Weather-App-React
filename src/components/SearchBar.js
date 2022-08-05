import Box from "@mui/material/Box";
import "../assets/css/SearchBar.min.css";
import React from "react";

const SearchBar = React.forwardRef(
  ({ inputValue, fetchNewData }, ref) => {
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
          ref={ref}
          type="text"
          value={inputValue}
          onKeyDown={(e) => inputKeyDownHandler(e)}
          placeholder="Another location"
        />
        <span className="input-changer"></span>
      </Box>
    );
  }
);

export default SearchBar;
