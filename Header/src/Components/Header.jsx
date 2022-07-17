import React from "react";
import { Avatar, AppBar } from "@mui/material/";

export const Header = () => {
  return (
    <AppBar position="static" className="mb-10 h-20">
      <div className="flex flex-row  my-auto">
        <div className="flex-grow justify-center content-center">
          <h1 className="text-4xl ml-5">Welcome to Notebook</h1>
        </div>
        <Avatar className="my-auto mr-5" sx={{ bgcolor: "#000000" }}>
          MT
        </Avatar>
      </div>
    </AppBar>
  );
};

export default Header;
