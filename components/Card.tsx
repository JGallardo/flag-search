import React from "react";
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import DownloadIcon from '@mui/icons-material/Download';

interface Props {
  alt: string;
  name: string;
  nameOfficial: string;
  region: string;
  subregion: string;
  population: number;
  flag: string;
  flagSvg: string;
  capital: string;
}

const Card = ({
  alt,
  name,
  nameOfficial,
  region,
  subregion,
  population,
  flag,
  flagSvg,
  capital
}: Props) => {

  return (
    <MuiCard
      sx={{
        width: "320px",
        margin: "0 1rem 2rem"
      }}
    >
      <CardMedia
        sx={{ height: "160px" }}
        image={flag}
        title={alt}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "1rem",
            fontWeight: 700
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {nameOfficial}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Capital:</b> {capital}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Population:</b> {population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Region:</b> {region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Subregion:</b> {subregion}
        </Typography>
        <ButtonGroup
          size="small"
          aria-label="Download the flag image"
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem auto 0",
            width: "100%",
          }}
        >
          <Button key="png">
            <a
              href={flag}
              download={flag.replace(/^.*[\\/]/, '')}
              rel="noreferrer"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
              target="_blank"
            >
              <span>{flag.replace(/^.*[\\/]/, '')}</span>
              <span style={{ marginLeft: "0.25rem" }}>
                <DownloadIcon/>
              </span>
            </a>
          </Button>
          <Button key="png">
            <a
              href={flagSvg}
              download={flagSvg.replace(/^.*[\\/]/, '')}
              rel="noreferrer"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
              target="_blank"
            >
              <span>{flagSvg.replace(/^.*[\\/]/, '')}</span>
              <span style={{ marginLeft: "0.25rem" }}>
                <DownloadIcon/>
              </span>
            </a>
          </Button>
        </ButtonGroup>
      </CardContent>
    </MuiCard>
  )
};

export default Card;