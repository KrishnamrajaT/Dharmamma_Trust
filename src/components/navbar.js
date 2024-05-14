import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { DrawerMenu } from "./drawer";
import { SearchInput } from "./searchinput";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Navigate, useNavigate, Link } from "react-router-dom";

const pages = ["Home", "Work", "Getinvolved", "About", "Mission"];

export function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handlePageChange = (page) => {
    if (page==="Home") {
    navigate('/');
      
    } else {
    navigate(`/${page}`);
      
    }

    console.log(page);
  };

  const donate = () => {
    navigate("/donation");
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <DrawerMenu />
            </IconButton>
          </Box>

          <Box>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                // flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)} // Fix: Pass a function reference
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link} // Use React Router Link directly
                to={`/${page}`}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            <Button
              variant="contained"
              color="success"
              endIcon={<VolunteerActivismIcon />}
              onClick={donate}
            >
              <span>Donate</span>
            </Button>{" "}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <SearchInput />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
