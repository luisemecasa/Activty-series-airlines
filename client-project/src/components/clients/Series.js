import React, { useState } from "react";
import { image } from "../../assets";
import "./Series.scss";
import { Box, Chip, Grid, IconButton, Modal, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

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

const series = [
  {
    id: 1,
    serieName: "Casa de Papel",
    numberSeasons: 3,
    clasification: "Accion",
    avatar: image.avatar1,
    description: "Una serie española de crimen y acción que sigue a un grupo de criminales liderados por 'El Profesor' mientras realizan atracos audaces, incluyendo la impresión de dinero en la Casa de la Moneda de España. La serie es conocida por su intriga y giros inesperados",
  },
  {
    id: 2,
    serieName: "Stranger Things",
    numberSeasons: 3,
    clasification: "SciFi",
    avatar: image.avatar2,
    description: "Stranger Things es una serie de ciencia ficción y terror ambientada en los años 80. La trama sigue a un grupo de niños que se enfrenta a fenómenos sobrenaturales y criaturas aterradoras en su pequeña ciudad de Hawkins, Indiana, después de la desaparición de uno de sus amigos. A medida que investigan, descubren un mundo paralelo llamado el Mundo del Revés y se unen a una niña con habilidades telequinéticas llamada Eleven. La serie combina elementos de aventura, amistad y misterio con referencias a la cultura pop de los años 80.",
  },
  {
    id: 3,
    serieName: "La Seleccion",
    numberSeasons: 3,
    clasification: "Deportes",
    avatar: image.avatar3,
    description: "La Selección es una serie de televisión colombiana que combina elementos de romance, drama y deporte. La trama se centra en la vida y las relaciones de un grupo de jóvenes futbolistas que aspiran a ser parte de la selección nacional de fútbol de Colombia. A lo largo de la serie, los personajes enfrentan desafíos personales y profesionales mientras persiguen sus sueños en el mundo del fútbol. La serie destaca la pasión por el deporte y las tensiones en el mundo de la competición, al tiempo que explora temas emocionales y románticos en la vida de los protagonistas.",
  },
  {
    id: 4,
    serieName: "F1 Drive to Survive",
    numberSeasons: 3,
    clasification: "Accion",
    avatar: image.avatar4,
    description: "F1: Drive to Survive es una serie documental que ofrece una mirada exclusiva detrás de escena del emocionante mundo de la Fórmula 1. La serie sigue a equipos y pilotos de Fórmula 1 a lo largo de una temporada, mostrando las rivalidades, los desafíos y los momentos más intensos de la competición. Drive to Survive ofrece a los espectadores una visión profunda de las vidas de los pilotos, sus equipos y las decisiones estratégicas que influyen en el resultado de las carreras. Es una serie llena de emoción y drama, ideal para los amantes del automovilismo y los que buscan una visión más completa de este emocionante deporte.",
  }
];

export const Series = () => {
  // Manejo de estado abierto | cerrado de la modal
  const [open, setOpen] = useState(false);
  // Objeto que va contener la información del cliente seleccionado
  const [selectedSerie, setSelectedSerie] = useState(null);

  const handleOpen = (serieId) => {
    // Buscar el cliente seleccionado
    const serie = series.find((serie) => serie.id === serieId);
    setOpen(true);
    console.log(serie);
    setSelectedSerie(serie);
  };

  return (
    <div className="series-container">
      <div className="series-list">
        {series.map((serie) => (
          <div className="card-serie">
            <h3 className="title-card-serie">{serie.SerieName}</h3>
            <img
              className="image-card-serie"
              onClick={() => handleOpen(serie.id)}
              src={serie.avatar}
              alt={serie.clientName}
            />
            <div className="type-card-serie">
          
              <Chip label={"Temporadas: "+serie.numberSeasons} color= "primary" />
            
            </div>
            <div>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      <div className="serie-selected">
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid container spacing={2}>
            <Box sx={style}>
              <Grid item xs={5} md={5}>
                <img
                  src={selectedSerie?.avatar}
                  alt={selectedSerie?.serieName}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </Grid>
              <Grid item xs={7} md={7}>
                <div className="sere-information">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {selectedSerie?.serieName}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <p>{selectedSerie?.description}</p>
                    <Chip label={selectedSerie?.clasification} color="primary" />
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
