import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useStore } from "../store";

const CountrySearch = () => {

  const [age, setAge] = React.useState('');
  const [data, setData] = useState({});
  const mockData = ["Germany", "United States of America", "Brazil", "Jamaica"];
  const isDarkMode = useStore((state) => state.isDarkMode);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  // This is where we get the data from the API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  
  return (
    <Box sx={{ padding: "2rem"}}>
      <Box
        sx={
          {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }
        }
      >
        <TextField
          id="outlined-basic"
          label="Search for a country..."
          variant="outlined"
          sx={
            {
              width: "40vw",
              backgroundColor: isDarkMode ? "#2b3743" : "#ffffff"
            }
          }
        />
        <FormControl
          sx={{ 
            width: "20vw",
            backgroundColor: isDarkMode ? "#2b3743" : "#ffffff",
          }}>
          <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Filter by Region"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>

            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
            
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {mockData.map((country) => {
          return <Card key={country}/>;
        })}
      </Box>
    </Box>
  )
};

export default CountrySearch;