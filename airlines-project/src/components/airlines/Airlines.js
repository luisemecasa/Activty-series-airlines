import React, { useState } from "react";
import { image } from "../../assets";
import "./Airlines.scss";
import { Box, Chip, Grid, IconButton, Modal, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

const airlines = [
  {
    id: 1,
    airline: "Avianca",
    flightNumber: "AV123",
    aircraftType: "Airbus A320",
    passengers: 150,
    logo: image.logoav,
    national: true,
    nextFlightTime: "12:00 AM",
  },
  {
    id: 2,
    airline: "Avianca",
    flightNumber: "AV9846",
    aircraftType: "Boeing 787",
    passengers: 150,
    logo: image.logoav,
    national: false,
    nextFlightTime: "10:10 AM",
  },
  {
    id: 3,
    airline: "Avianca",
    flightNumber: "AV020",
    aircraftType: "Airbus A320",
    passengers: 150,
    logo: image.logoav,
    national: true,
    nextFlightTime: "08:40 AM",
  },
  {
    id: 4,
    airline: "Avianca",
    flightNumber: "AV204",
    aircraftType: "Boeing 787",
    passengers: 220,
    logo: image.logoav,
    national: false,
    nextFlightTime: "08:30 PM",
  },
  {
    id: 5,
    airline: "Avianca",
    flightNumber: "AV8658",
    aircraftType: "Airbus A320",
    passengers: 150,
    logo: image.logoav,
    national: true,
    nextFlightTime: "08:05 PM",
  },
  {
    id: 6,
    airline: "Viva",
    flightNumber: "VVC1257",
    aircraftType: "Airbus A320",
    passengers: 150,
    logo: image.logoviv,
    national: true,
    nextFlightTime: "11:00 AM",
  },
  {
    id: 7,
    airline: "Viva",
    flightNumber: "VVC1457",
    aircraftType: "Airbus A320",
    passengers: 150,
    logo: image.logoviv,
    national: true,
    nextFlightTime: "06:00 AM",
  },
  {
    id: 8,
    airline: "Viva",
    flightNumber: "VVC1490",
    aircraftType: "Airbus A320",
    passengers: 150,
    logo: image.logoviv,
    national: false,
    nextFlightTime: "08:00 PM",
  },
  {
    id: 9,
    airline: "Viva",
    flightNumber: "VVC1487",
    aircraftType: "Airbus A320",
    passengers: 150,
    logo: image.logoviv,
    national: false,
    nextFlightTime: "04:00 AM",
  },
  {
    id: 10,
    airline: "Viva",
    flightNumber: "VVC1367",
    aircraftType: "Airbus A320",
    passengers: 150,
    logo: image.logoviv,
    national: false,
    nextFlightTime: "03:00 AM",
  },
];

export const Airlines = () => {
  const [open, setOpen] = useState(false);
  const [selectedAirline, setSelectedAirline] = useState(null);

  const handleOpen = (airlineId) => {
    const airline = airlines.find((airline) => airline.id === airlineId);
    setOpen(true);
    setSelectedAirline(airline);
  };

  return (
    <div className="airlines-container">
      <div className="airlines-list">
        {airlines.map((airline) => (
          <div
            className={`card-airline ${
              airline.airline === "Avianca" ? "avianca" : "viva"
            }`}
          >
            <img
              className="image-card-airline"
              onClick={() => handleOpen(airline.id)}
              src={airline.logo}
              alt={airline.airlineName}
            />
            <div className="type-card-airline">
              <Chip
                label={"Número de vuelo: " + airline.flightNumber}
                color="primary"
              />
            </div>
            <div>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      <div className="airline-selected">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title-airline"
          aria-describedby="modal-modal-description-airline"
        >
          <Grid container spacing={2}>
            <Box sx={style}>
              <Grid item xs={5} md={5}>
                <img
                  src={selectedAirline?.logo}
                  alt={selectedAirline?.airline}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </Grid>
              <Grid item xs={7} md={7}>
                <div className="airline-information">
                  <Typography
                    id="modal-modal-title-airline"
                    variant="h6"
                    component="h2"
                  >
                    {selectedAirline?.airline}
                  </Typography>
                  <Typography
                    id="modal-modal-description-airline"
                    sx={{ mt: 2 }}
                  >
                    <p>Aerolínea: {selectedAirline?.airline}</p>
                    <p>Número de vuelo: {selectedAirline?.flightNumber}</p>
                    <p>Tipo de avión: {selectedAirline?.aircraftType}</p>
                    <p>Cantidad de pasajeros: {selectedAirline?.passengers}</p>
                    <p>Nacional: {selectedAirline?.national ? "Sí" : "No"}</p>
                    <p>
                      Hora del próximo vuelo: {selectedAirline?.nextFlightTime}
                    </p>
                  </Typography>
                </div>
              </Grid>
            </Box>
          </Grid>
        </Modal>
      </div>
    </div>
  );
};
