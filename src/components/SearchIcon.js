import React from "react";
import SearchIc from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const SearchIcon = ({ fetchNewData }) => {
  return (
    <Box
      onClick={() => fetchNewData()}
      sx={{
        position: "absolute",
        right: { xs: "50px", md: "0" },
        zIndex: 10,
        top: { xs: "35px", md: "0" },
        backgroundColor: "#333",
        width: { xs: "45px", md: "70px" },
        height: { xs: "45px", md: "70px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "4px",
      }}
    >
      <SearchIc
        sx={{
          fontSize: { xs: "20px", md: "30px" },
          color: "#eee",
        }}
      />
    </Box>
  );
};

export default SearchIcon;
