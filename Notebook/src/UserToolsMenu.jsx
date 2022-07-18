import React from "react";
import { Divider, List, ListItem, ListItemText, Button } from "@mui/material/";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export const Notebook = () => {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button onClick={() => console.log("hello")}>
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
  );
};

export default Notebook;
