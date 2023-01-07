[33mcommit 5ed0902faaad2b39b46b7a537a2ac2595c8c37a6[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: Sajjaddi <sajjadjahanids@gmail.com>
Date:   Fri Aug 5 14:35:11 2022 +0430

    fix-error-and-optimise-code

[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex f212aa3..17722eb 100644[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -84,6 +84,7 @@[m [mconst App = () => {[m
       ) : ([m
         <>[m
           <Container>[m
[32m+[m[32m            {console.log(weatherCtx.status.isAlert)}[m
             {weatherCtx.status.isAlert ? <AlertBox /> : null}[m
             <LeftSide />[m
             <RightSide />[m
[1mdiff --git a/src/components/RightSide.js b/src/components/RightSide.js[m
[1mindex 6654562..f75f0ab 100644[m
[1m--- a/src/components/RightSide.js[m
[1m+++ b/src/components/RightSide.js[m
[36m@@ -1,5 +1,5 @@[m
 import Box from "@mui/material/Box";[m
[31m-import React, { useContext, useState } from "react";[m
[32m+[m[32mimport React, { useContext, useRef, useState } from "react";[m
 import SearchIcon from "./SearchIcon";[m
 import SearchBar from "./SearchBar";[m
 import TopCities from "./TopCities";[m
[36m@@ -11,14 +11,10 @@[m [mimport Loader from "./Loader";[m
 import NextHoursWeather from "./NextHoursWeather";[m
 [m
 const RightSide = () => {[m
[31m-  const [inputValue, setInputValue] = useState("");[m
[32m+[m[32m  const searchInputRef = useRef();[m
   const weatherCtx = useContext(WeatherContext);[m
 [m
[31m-  const inputSearchHandler = (value) => {[m
[31m-    setInputValue(value);[m
[31m-  };[m
[31m-[m
[31m-  const fetchNewData = async (cityName = inputValue) => {[m
[32m+[m[32m  const fetchNewData = async (cityName = searchInputRef.current.value) => {[m
     weatherCtx.changeStatus({ isLoading: true });[m
     const value = cityName;[m
     if (value.trim().length) {[m
[36m@@ -73,9 +69,14 @@[m [mconst RightSide = () => {[m
           })[m
         )[m
         .catch(() => {[m
[31m-          weatherCtx.changeStatus({ statusFetch: false, isLoading: false });[m
[32m+[m[32m          console.log(1);[m
[32m+[m[32m          weatherCtx.changeStatus({[m
[32m+[m[32m            isAlert: true,[m
[32m+[m[32m            statusFetch: false,[m
[32m+[m[32m            isLoading: false,[m
[32m+[m[32m          });[m
         });[m
[31m-      setInputValue("");[m
[32m+[m[32m      searchInputRef.current.value = "";[m
     }[m
   };[m
 [m
[36m@@ -92,11 +93,7 @@[m [mconst RightSide = () => {[m
         }}[m
       >[m
         <SearchIcon fetchNewData={fetchNewData} />[m
[31m-        <SearchBar[m
[31m-          inputValue={inputValue}[m
[31m-          fetchNewData={fetchNewData}[m
[31m-          inputSearchHandler={inputSearchHandler}[m
[31m-        />[m
[32m+[m[32m        <SearchBar ref={searchInputRef} fetchNewData={fetchNewData} />[m
         <TopCities fetchNewData={fetchNewData} />[m
         <WeatherDetails />[m
         <NextHoursWeather />[m
[1mdiff --git a/src/components/SearchBar.js b/src/components/SearchBar.js[m
[1mindex 12e8efb..e11d2cd 100644[m
[1m--- a/src/components/SearchBar.js[m
[1m+++ b/src/components/SearchBar.js[m
[36m@@ -2,31 +2,32 @@[m [mimport Box from "@mui/material/Box";[m
 import "../assets/css/SearchBar.min.css";[m
 import React from "react";[m
 [m
[31m-const SearchBar = ({ inputSearchHandler, inputValue, fetchNewData }) => {[m
[31m-  const inputKeyDownHandler = (e) => {[m
[31m-    if (e.keyCode === 13) {[m
[31m-      fetchNewData();[m
[31m-    }[m
[31m-  };[m
[32m+[m[32mconst SearchBar = React.forwardRef([m
[32m+[m[32m  ({ inputValue, fetchNewData }, ref) => {[m
[32m+[m[32m    const inputKeyDownHandler = (e) => {[m
[32m+[m[32m      if (e.keyCode === 13) {[m
[32m+[m[32m        fetchNewData();[m
[32m+[m[32m      }[m
[32m+[m[32m    };[m
 [m
[31m-[m
[31m-  return ([m
[31m-    <Box[m
[31m-      className="input-container"[m
[31m-      sx={{[m
[31m-        width: { xs: "100%", md: "86%" },[m
[31m-      }}[m
[31m-    >[m
[31m-      <input[m
[31m-        type="text"[m
[31m-        value={inputValue}[m
[31m-        onKeyDown={(e) => inputKeyDownHandler(e)}[m
[31m-        onChange={(e) => inputSearchHandler(e.target.value)}[m
[31m-        placeholder="Another location"[m
[31m-      />[m
[31m-      <span className="input-changer"></span>[m
[31m-    </Box>[m
[31m-  );[m
[31m-};[m
[32m+[m[32m    return ([m
[32m+[m[32m      <Box[m
[32m+[m[32m        className="input-container"[m
[32m+[m[32m        sx={{[m
[32m+[m[32m          width: { xs: "100%", md: "86%" },[m
[32m+[m[32m        }}[m
[32m+[m[32m      >[m
[32m+[m[32m        <input[m
[32m+[m[32m          ref={ref}[m
[32m+[m[32m          type="text"[m
[32m+[m[32m          value={inputValue}[m
[32m+[m[32m          onKeyDown={(e) => inputKeyDownHandler(e)}[m
[32m+[m[32m          placeholder="Another location"[m
[32m+[m[32m        />[m
[32m+[m[32m        <span className="input-changer"></span>[m
[32m+[m[32m      </Box>[m
[32m+[m[32m    );[m
[32m+[m[32m  }[m
[32m+[m[32m);[m
 [m
 export default SearchBar;[m
