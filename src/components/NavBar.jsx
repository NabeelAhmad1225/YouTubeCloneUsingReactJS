import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "../components";
const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: "0",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        variant="h5"
        color="#fff"
        fontWeight="bold"
        sx={{ ml: 2, display: { xs: "none", md: "flex" } }}
      >
        {" "}
        My<span style={{ color: "#FC1503" }}>Tube</span>
      </Typography>
    </Link>

    <SearchBar />
  </Stack>
);

export default NavBar;
