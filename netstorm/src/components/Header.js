import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Button,
  ClickAwayListener,
  Collapse,
  Drawer,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
  Typography,
} from "@material-ui/core";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#131516",
  },
  flexBox1: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "15px 0px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    listStyle: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
    "@media (max-width: 1050px)": {
      fontSize: "14px",
      fontWeight: "600",
    },
    "@media (max-width: 950px)": {
      gap: "5px",
    },
  },
  walletBTN: {
    height: "50px",
    border: "2px solid whiteSmoke",
    borderRadius: "25px",
    fontSize: "16px",
    color: "whiteSmoke",
    fontWeight: "700",
    textTransform: "capitalize",
    "&:hover": {
      border: "0px",
      background: "linear-gradient(135deg, #4528dc 10%, #57048a)",
    },
    "& .MuiButton-label": {
      padding: "10px",
      visibility: "visible",
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiButton-label": {
        visibility: "visible",
        fontSize: "0px",
        padding: "0px",
      },
    },
  },
  walltetBox: {
    display: "flex",
    gap: "10px",
  },
  li: {
    display: "flex",
    alignItems: "center",
  },
  menuBtn: {
    color: "white",
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
    },
  },
  listBox: {
    display: "block",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },

  drawer: {
    width: "350px",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center !important",
    flexDirection: "column",
    rowGap: "10px",
    backgroundColor: "black !important",
    "@media (max-width: 350px)": {
      width: "250px",
    },
  },
  menuTxt: {
    fontWeight: "700",
    color: "#8e8e8e",
  },
  drawertoolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px",
  },
  drawerList: {
    padding: "10px 0px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "20px",
    "&:active": {
      color: "blue",
    },
  },
  menuPaper: {
    width: "200px",
  },
  hoverMenu: {
    fontSize: "16px",
    fontWeight: "700",
    "&:hover": {
      color: "blue",
    },
  },
  searchBox:{
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    paddingTop:'200px',
  },
  searchTitle:{
    fontSize:'45px',
    fontWeight:'700',
    fontFamily:'jost',
    letterSpacing:'-1.5px',
    lineHeight:'1em',
    paddingBottom:'20px',
  },
  searchSubTxt:{
    fontFamily:'poppins',
    fontSize:'1rem',
    fontWeight:'400',
    lineHeight:'1.5',
    wordWrap:'break-word',
  },
  searchBTN:{
    height: "50px",
    border: "2px solid whiteSmoke",
    borderRadius: "25px",
    fontSize: "16px",
    color: "whiteSmoke",
    fontWeight: "700",
    textTransform: "capitalize",
    width:'100px',
    "&:hover": {
      border: "0px",
      background: "linear-gradient(135deg, #4528dc 10%, #57048a)",
    },
  },

}));

const CustomTextField = withStyles({
  root: {
    '& .MuiInputBase-root': {
      padding: 0, // Remove padding
      backgroundColor:'#191919',
      color:'#8e8e8e',
      fontFamily:'poppins',
      fontWeight:'600',
      border:'2px solid ',
    borderRadius:'0px',
    borderImage: 'linear-gradient(to right, gray, white) 1'
    },
  },
})(TextField);

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  //drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
    setExpand(false);
    setExpand2(false);
    setExpand3(false);
  };
  //search drawer
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const anchorRef = useRef(null);
  const anchorRef1 = useRef(null);
  const anchorRef2 = useRef(null);

  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };
  const handleMouseEnter1 = () => {
    setOpen1(true);
  };
  const handleMouseLeave1 = () => {
    setOpen1(false);
  };
  const handleMouseEnter2 = () => {
    setOpen2(true);
  };
  const handleMouseLeave2 = () => {
    setOpen2(false);
  };
 
  const handleClose1 = () => {
    setOpen1(false);
  };
  
  const handleListKeyDown1 = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1(false);
    }
  };
 

  //Expand
  const [expand, setExpand] = React.useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  const [expand2, setExpand2] = React.useState(false);
  const handleExpand2 = () => {
    setExpand2(!expand2);
  };
  const [expand3, setExpand3] = React.useState(false);
  const handleExpand3 = () => {
    setExpand3(!expand3);
  };
  const communiytItems = [
    { label: "Blog", route: "/blog" },
    { label: "Blog Single", route: "/blog-single" },
    { label: "Help Center", route: "/help-center" },
  ];
  const exploreItems = [
    { label: "Explore Style-1", route: "/explore-style-1" },
    { label: "Explore Style-2", route: "/explore-style-2" },
    { label: "Explore Style-3", route: "/explore-style-3" },
    { label: "Explore Style-4", route: "/explore-style-4" },
    { label: "Live Auction", route: "/live-auction" },
    { label: "Item Details", route: "/item-details" },
  ];
  const pagesItems = [
    { label: "Authors", route: "/authors" },
    { label: "Author", route: "/author" },
    { label: "Wallet Connect", route: "/wallet-connect" },
    { label: "Create", route: "/create" },
    { label: "Login", route: "/login" },
    { label: "Signup", route: "/signup" },
  ];

  const handleMenuItemClick = (label) => {
    handleClose1(); 
    navigate(`/${label.toLowerCase().replace(" ", "-")}`); 
  };

  const drawer = (
    <Box className={classes.drawer}>
      <Box style={{ padding: "10px" }}>
        <Toolbar className={classes.drawertoolbar}>
          <Typography className={classes.menuTxt}>Menu</Typography>
          <IconButton className={classes.menuTxt} onClick={handleDrawerToggle}>
            <HighlightOffIcon />
          </IconButton>
        </Toolbar>
        <ListItem className={classes.drawerList} onClick={() => navigate("/")}>
          Home
        </ListItem>
        <ListItem className={classes.drawerList} onClick={handleExpand}>
          Explore <ExpandMoreIcon /> {expand}
        </ListItem>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {exploreItems.map((item, index) => (
              <ListItem button key={index} onClick={() => navigate(item.route)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItem className={classes.drawerList} onClick={()=>navigate('/activity')}> Activity</ListItem>
        <ListItem className={classes.drawerList} onClick={handleExpand2}>
          Community <ExpandMoreIcon />
          {expand2}
        </ListItem>
        <Collapse in={expand2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {communiytItems.map((item, index) => (
              <ListItem button key={index} onClick={() => navigate(item.route)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItem className={classes.drawerList} onClick={handleExpand3}>
          Pages <ExpandMoreIcon />
          {expand2}
        </ListItem>
        <Collapse in={expand3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {pagesItems.map((item, index) => (
              <ListItem button key={index} onClick={() => navigate(item.route)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItem
          className={classes.drawerList}
          onClick={() => navigate("/contact-us")}
        >
          Contact
        </ListItem>
      </Box>
    </Box>
  );
  const searchDrawer = (
    <Box className={classes.drawer}>
      <Box style={{ padding: "10px" }}>
        <Toolbar className={classes.drawertoolbar}>
          <Typography className={classes.menuTxt}>Search</Typography>
          <IconButton className={classes.menuTxt} onClick={handleSearchToggle}>
            <HighlightOffIcon />
          </IconButton>
        </Toolbar>
        <Box className={classes.searchBox}>
          <Typography className={classes.searchTitle}>What are you looking for?</Typography>
          <Typography className={classes.searchSubTxt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <CustomTextField variant="outlined" placeholder="Enter your Keywords"/>
          <Button className={classes.searchBTN}>Search</Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Container>
              <Box className={classes.flexBox1}>
                <img src="images/logo.png" alt="logo" />

                <Box style={{ width: "60%" }} className={classes.listBox}>
                  <ul className={classes.listItem}>
                    <li onClick={() => navigate("/")}>Home</li>
                    <li
                      className={classes.li}
                      ref={anchorRef}
                      aria-controls={open ? "menu-list-grow" : undefined}
                      
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Explore <ExpandMoreIcon />
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper className={classes.menuPaper}>
                              <ClickAwayListener onClickAway={handleClose1}>
                                <MenuList
                                  autoFocusItem={open1}
                                  id="menu-list-grow"
                                  onKeyDown={handleListKeyDown1}
                                >
                                  {exploreItems.map((menuItem) => (
                                    <MenuItem
                                      key={menuItem.label}
                                      onClick={() =>
                                        handleMenuItemClick(menuItem.label)
                                      }
                                      className={classes.hoverMenu}
                                    >
                                      {menuItem.label}
                                    </MenuItem>
                                  ))}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </li>

                    <li onClick={()=>navigate('/activity')}>Activity</li>
                    <li
                      className={classes.li}
                      ref={anchorRef1}
                      aria-controls={open1 ? "menu-list-grow" : undefined}
                      onMouseEnter={handleMouseEnter1}
                      onMouseLeave={handleMouseLeave1}
                    >
                      Community <ExpandMoreIcon />
                      <Popper
                        open={open1}
                        anchorEl={anchorRef1.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper className={classes.menuPaper}>
                              <ClickAwayListener onClickAway={handleClose1}>
                                <MenuList
                                  autoFocusItem={open1}
                                  id="menu-list-grow"
                                  onKeyDown={handleListKeyDown1}
                                >
                                  {communiytItems.map((menuItem) => (
                                    <MenuItem
                                      key={menuItem.label}
                                      onClick={() =>
                                        handleMenuItemClick(menuItem.label)
                                      }
                                      className={classes.hoverMenu}
                                    >
                                      {menuItem.label}
                                    </MenuItem>
                                  ))}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </li>
                    <li
                      className={classes.li}
                      ref={anchorRef2}
                      aria-controls={open2 ? "menu-list-grow" : undefined}
                      onMouseEnter={handleMouseEnter2}
                      onMouseLeave={handleMouseLeave2}
                    >
                      Pages <ExpandMoreIcon />
                      <Popper
                        open={open2}
                        anchorEl={anchorRef2.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper className={classes.menuPaper}>
                              <ClickAwayListener onClickAway={handleClose1}>
                                <MenuList
                                  autoFocusItem={open1}
                                  id="menu-list-grow"
                                  onKeyDown={handleListKeyDown1}
                                >
                                  {pagesItems.map((menuItem) => (
                                    <MenuItem
                                      key={menuItem.label}
                                      onClick={() =>
                                        handleMenuItemClick(menuItem.label)
                                      }
                                      className={classes.hoverMenu}
                                    >
                                      {menuItem.label}
                                    </MenuItem>
                                  ))}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </li>
                    <li onClick={() => navigate("/contact-us")}>Contact</li>
                  </ul>
                </Box>

                <Box className={classes.walltetBox}>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={handleSearchToggle}
                  >
                    <SearchIcon />
                  </IconButton>

                  <IconButton
                    aria-label="open drawer"
                    edge="start"
                    className={classes.menuBtn}
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Button
                    className={classes.walletBTN}
                    variant="outlined"
                    onClick={()=>navigate('/wallet-connect')}
                    startIcon={<AccountBalanceWalletOutlinedIcon />}
                  >
                    Wallet Connect
                  </Button>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box>
        <Drawer
          open={drawerOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          PaperProps={{ style: { backgroundColor: "black", color: "white" } }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box>
        <Drawer
          open={searchOpen}
          onClose={handleSearchToggle}
          anchor="right"
          PaperProps={{ style: { backgroundColor: "black", color: "white" } }}
        >
          {searchDrawer}
        </Drawer>
      </Box>
      <Toolbar />
    </React.Fragment>
  );
}
