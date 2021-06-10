import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import { NavLink } from "react-bootstrap";

/**
 * @authornpm
 * @function Drawer
 **/
const useStyles = makeStyles((theme) => ({
  drawerContainer: {},
  iconButtonContainer: {
    marginLeft: "auto",
    color: "white",
  },

  menuIconToggle: {
    fontSize: "3rem",
  },
}));
const DrawerCom = () => {
  const history = useHistory();
  const handleOnClick = () => history.push("program");

  const [openDrawer, setOpenDrawer] = useState(false);
  const listStyle3 = {
    background: "#fafa00",
  };
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="left"
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawerContainer }}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        background="primary"
      >
        <List>
          <ListItem divider button>
            <ListItemIcon>
              <Link to="/">
                <ListItemText>गृहपृष्ठ</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <Link to="/introduction" exact>
                <ListItemText>परिचय</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <Link to="/notice" exact>
                <ListItemText>कार्यक्रम</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <Link to="/report" exact>
                <ListItemText>रतिबदेन</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <Link to="/report" exact>
                <ListItemText>सुचना तथा जानकारी</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <Link to="/gallery" exact>
                <ListItemText>ग्यालरी</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <Link to="/Covid" exact>
                <ListItemText>Covid-Data</ListItemText>
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerCom;
