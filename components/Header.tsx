import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useStore } from "../store";

const Header = () => {
  const isDarkMode = useStore((state) => state.isDarkMode)
  const toggleDarkMode = useStore((state) => state.toggleDarkMode)

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "#2b3743" : "#ffffff",
        boxShadow: "0px 2px 2px lightgrey",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
      }}
    >
      <Typography
        variant="h1"
        sx={{ 
          fontSize: "1.5rem",
          fontWeight: "700",
        }}
      >
        Country Flag Search
      </Typography>
      <Button onClick={toggleDarkMode}>
        <NightlightRoundIcon />
        Dark Mode
      </Button>
    </Box>
  )
};

export default Header;