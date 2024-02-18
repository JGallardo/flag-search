import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useStore } from "../store";

const CountrySearch = () => {

  const [age, setAge] = React.useState('');
  const [data, setData] = useState([
    {
      name: {common: ""},
      flags: {
        alt: "",
        png: "",
        svg: "" 
      },
      capital: [""],
      population: 0,
      region: "",
    }
  ]);

  const isDarkMode = useStore((state) => state.isDarkMode);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  // This is where we get the data from the API
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  
  return (
    <Box sx={{ padding: "2rem"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search for a country..."
          variant="outlined"
          sx={{
            width: "40vw",
            backgroundColor: isDarkMode ? "#2b3743" : "#ffffff"
          }}
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
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{ 
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {data.map((country) => {
          return (
            <Card
              alt={country.flags.alt}
              name={country.name.common}
              flag={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital[0]}
              key={country.name.common}
            />
          );
        })}
      </Box>
    </Box>
  )
};

export default CountrySearch;