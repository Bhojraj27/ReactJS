import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Typography, makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

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
function Activity() {
    const classes = useStyles();
    const navigate = useNavigate();
    return (
      <div>
              <Header/>
        <div className={classes.mainContainer}>
          <Typography className={classes.headTitle}>Activity</Typography>
          <Typography className={classes.subTitle}>
            <span className={classes.pointer} onClick={()=>navigate('/')}>Home</span> {"> "}
            <span className={classes.pointer}>Pages</span>
            {" >"} Activity
          </Typography>
        </div>
     
        <Footer/>
      </div>
    )
}

export default Activity