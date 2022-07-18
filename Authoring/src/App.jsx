import React from "react";
import ReactDOM from "react-dom";
import { Container, Grid } from "@mui/material/";

import Header from "Header/Header";
import Footer from "Header/Footer";
import Notebook from "Notebook/Notebook";

import "./index.scss";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Notebook />
        </Grid>
        <Grid item xs={8}></Grid>
        <Footer />
      </Grid>
    </Container>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
