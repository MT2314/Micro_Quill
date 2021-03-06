import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material/";

import Header from "Header/Header";
import Footer from "Header/Footer";
import Notebook from "./Notebook.jsx";
import UserToolsMenu from "./UserToolsMenu.jsx";

import "./index.scss";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <UserToolsMenu />
        </Grid>
        <Grid item xs={8}>
          <Notebook />
        </Grid>
        <Footer />
      </Grid>
    </Container>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
