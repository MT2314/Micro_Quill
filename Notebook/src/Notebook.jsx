import React, { useState } from "react";
import { Container, Box } from "@mui/material/";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export const Notebook = () => {
  const [value, setValue] = useState("");
  return (
    <Container maxWidth="lg" className="from-white">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </Container>
  );
};

export default Notebook;
