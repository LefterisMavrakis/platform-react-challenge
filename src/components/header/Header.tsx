import { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Constraint, NavButton } from "../shared/styledCommon";
import Flex from "../shared/styledFlex";
import { HeaderWrapper } from "./styledComponents";

const BootstrapDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderTopRightRadius: "48px",
    borderBottomRightRadius: "48px",
    padding: "20px 0",
    minWidth: "175px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiListItem-root a": {
    width: "100%",
    cursor: "pointer",
  },
}));

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prevValue) => !prevValue);
  };

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer}>
      <List>
        <ListItem key={"cats"} disablePadding>
          <NavLink
            to="/cats"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemText primary={"Cats"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={"breeds"} disablePadding>
          <NavLink
            to="/breeds"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemText primary={"Breeds"} />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem key={"favourites"} disablePadding>
          <NavLink
            to="/favourites"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemText primary={"Favourites"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <nav className="app-header" data-testid="app-header">
        <HeaderWrapper>
          <Constraint>
            <Flex
              $justifyContent="space-between"
              $alignItems="center"
              $fullwidth
            >
              <NavButton onClick={toggleDrawer}>
                <Flex $spacingSize="4px">
                  <MenuIcon />

                  <Typography
                    color="#ffffff"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    Menu
                  </Typography>
                </Flex>
              </NavButton>
              <Flex $alignItems="center" className="app-logo">
                <NavLink to={"/cats"}>
                  <Typography
                    color="#ffffff"
                    style={{ fontWeight: "800", fontSize: "26px" }}
                  >
                    LOGO
                  </Typography>
                </NavLink>
              </Flex>
            </Flex>
          </Constraint>
        </HeaderWrapper>
      </nav>

      <BootstrapDrawer open={drawerOpen} onClose={toggleDrawer}>
        {DrawerList}
      </BootstrapDrawer>
    </>
  );
};

export default Header;
