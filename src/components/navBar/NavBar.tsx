import { useState } from "react";
import { Grid } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "styled-components";
import SearchForm from "../form/SearchForm";

const IconButtonStyled = styled(IconButton)`
  margin-right: 16px;
  color: #00000;
  &:hover {
    color: lavender;
    background-color: transparent;
  }
`;

const SocialIconsContainer = styled(Grid)`
  margin-top: 365px;
  margin-bottom: 16px;
`;

export default function NavBar() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, left: open });
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        position="fixed"
        color="transparent"
        sx={{ boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "/" ? "white" : "black", minHeight: 150 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <Box
              sx={{ width: 347 }}
              component="div"
              role="presentation"
              onClick={toggleDrawer("left", false)}
              onKeyDown={toggleDrawer("left", false)}
            >
              <List>
                <Box
                  sx={{
                    mt: 2,
                    mb: 22,
                  }}
                >
                  <ListItem
                    disablePadding
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/"
                    >
                      <Typography variant="h1">WEMA</Typography>
                    </Link>
                  </ListItem>
                </Box>

                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Stack spacing={2}>
                    <ListItem disablePadding>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/"
                      >
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textDecoration: "none",
                          }}
                          color="inherit"
                        >
                          <Typography>Home</Typography>
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/products"
                      >
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textDecoration: "none",
                          }}
                          color="inherit"
                        >
                          <Typography>Products</Typography>
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/favourites"
                      >
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textDecoration: "none",
                          }}
                          color="inherit"
                        >
                          <Typography>Favourites</Typography>
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/cart"
                      >
                        <Button
                          sx={{
                            "&:hover": { backgroundColor: "transparent" },
                            textDecoration: "none",
                          }}
                          color="inherit"
                        >
                          <Typography>Cart</Typography>
                        </Button>
                      </Link>
                    </ListItem>
                  </Stack>
                </Box>
              </List>

              <SocialIconsContainer
                container
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Link to="https://www.facebook.com/" target="_blank">
                    <IconButtonStyled rel="noopener" aria-label="Facebook">
                      <FacebookIcon />
                    </IconButtonStyled>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="https://twitter.com/" target="_blank">
                    <IconButtonStyled rel="noopener" aria-label="Twitter">
                      <TwitterIcon />
                    </IconButtonStyled>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="https://instagram.com/" target="_blank">
                    <IconButtonStyled rel="noopener" aria-label="Instagram">
                      <InstagramIcon />
                    </IconButtonStyled>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="https://youtube.com/" target="_blank">
                    <IconButtonStyled rel="noopener" aria-label="YouTube">
                      <YouTubeIcon />
                    </IconButtonStyled>
                  </Link>
                </Grid>
              </SocialIconsContainer>
            </Box>
          </Drawer>

          <Typography
            variant="h1"
            component="div"
            sx={{
              flexGrow: 1,
              color: "/" ? "white" : "black",
            }}
          >
            WEMA
          </Typography>
          <SearchForm />
          {/* <Link
            style={{ textDecoration: "none", color: "/" ? "white" : "black" }}
            to="/"
          >
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "/" ? "white" : "black" }}
            to="/products"
          >
            <Button color="inherit">Products</Button>
          </Link> */}
          <Link
            style={{ textDecoration: "none", color: "/" ? "white" : "black" }}
            to="/favourites"
          >
            <Button color="inherit">Favourites</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "/" ? "white" : "black" }}
            to="/cart"
          >
            <Button color="inherit">Cart</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
