import { Search, SearchIconWrapper, StyledInputBase } from "../styles";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
// import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";

export default function SearchAppBar(props) {
  const handleChange = (e) => {
    props.setSearchValue(e.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <CameraEnhanceIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Gallery
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                onClick={props.handleSearch}
                sx={{ cursor: "pointer", zIndex: 10 }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
              value={props.searchValue}
              onKeyPress={(e) => {
                if (e.key === "Enter") props.handleSearch();
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
