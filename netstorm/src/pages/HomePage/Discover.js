import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Container, Typography } from "@material-ui/core";
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  mainContainer: {
    paddingTop: '80px',
    width: '100%',
    color: 'white',
    textAlign: 'left',
    background: "linear-gradient(to bottom, #1c1229, #181634)"
  },
  h1: {
    fontWeight: '900',
    fontFamily: "Jost",
    "@media (max-width: 650px)": {
      fontSize:'40px'
    },
  },
  titleBox: {
    width: '50%',
    marginTop: '15px',
    "@media (max-width: 768px)": {
      width: '100%',
    }
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    width: 'fit-content',
    backgroundImage: 'linear-gradient(150deg, #57048a 0%, #4528dc 78%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subTitle: {
    color: '#8E8E8E',
    fontSize: '20px',
    fontWeight: '400',
    marginTop: '20px',
    fontFamily:'poppins',
    "@media (max-width: 650px)": {
      fontSize:'18px'
    },
  },
  button:{
    width: "150px",
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
  },
  btnBox:{
    display:'flex',
    marginTop:'30px',
    gap:'10px',
    paddingBottom:"80px",

  },
  headTitleHR: {

    backgroundImage: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    WebkitTextFillColor: "transparent",
    position: "absolute",
    height: "2px",
    width: "45px",
    top: "12px",
    left: "110px",
  },

});

function Discover() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Container >
        <span
              style={{ position: "relative" }}
              className={classes.title}
            >
               NETSTROM
              <span className={classes.headTitleHR} />
            </span>
        <Box className={classes.titleBox}>
          <Typography className={classes.h1} variant="h2">Discover, collect, and sell extraordinary NFTs</Typography>
          <Typography className={classes.subTitle}>Explore on the world's best & largest NFT marketplace</Typography>

          <Box className={classes.btnBox}>
            <Button variant="outlined" className={classes.button} onClick={()=>navigate('/explore-style-1')} startIcon={<ExploreOutlinedIcon/>}>Explore</Button>
            <Button variant="outlined" className={classes.button} onClick={()=>navigate('/create')} startIcon={<BorderColorOutlinedIcon/>}>Create</Button>

          </Box>

        </Box>
      </Container>
    </div>
  );
}

export default Discover;
