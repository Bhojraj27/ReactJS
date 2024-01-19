import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Typography, makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import Explore from '../HomePage/Explore'
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: "100px",
    width: "100%",
    height: "300px",
    textAlign: "center",
    background:
      "linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 85%)), url('images/contact_bg.jpeg') no-repeat scroll top center/cover",
    color: "#f5f5f5",
  },

  headTitle: {
    fontSize: "3rem",
    fontFamily: "jost",
    fontWeight: "900",
  },
  subTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    margin: "10px",
    fontFamily: "poppins",
    wordSpacing: "8px",
  },
  pointer: {
    cursor: "pointer",
  },
}))
function Explore1() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className={classes.mainContainer}>
        <Typography className={classes.headTitle}>Explore</Typography>
        <Typography className={classes.subTitle}>
          <span className={classes.pointer} onClick={()=>navigate('/')}>Home</span> {"> "}
          <span className={classes.pointer}>Pages</span>
          {" >"} Explore Style 1
        </Typography>
      </div>
      <Explore/>
      <Footer/>
    </div>
  )
}

export default Explore1