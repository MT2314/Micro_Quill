import React from "react";
import ReactDOM from "react-dom";
import {
  Avatar,
  Container,
  AppBar,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material/";

import Header from "Header/Header";
import Footer from "Header/Footer";

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
        <Grid item xs={4}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Text" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Maths" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Image" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <Button> Save </Button>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}></Grid>
        <Footer />
      </Grid>
    </Container>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
