import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "100px",
  },
  card: {
    backgroundColor: "#16151a",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "10px",
    paddingBottom: "20px",
    gap: "15px",
    cursor: "pointer",
    paddingTop: "20px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },

  cardImg: {
    width: "80%",
    borderRadius: "5px",
  },
  cardName: {
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "jost",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out, cursor 0.5s ease-in-out",
    "&:hover": {
      color: "#4528dc",
    },
  },
  cardBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "80%",
    gap: "10px",
    paddingTop: "20px",
  },
  subTXT: {
    fontSize: "16px",
    fontWeight: "700",
    transition: "color 0.3s ease-in-out, cursor 0.5s ease-in-out",
    "&:hover": {
      color: "#4528dc",
    },
  },
  spanTXT: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#8e8e8e",
  },
  cardEnd: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "15px",
  },
  button: {
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
  headBax: {
    width: "100%",
    textAlign: "start",
  },
  subHeadBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "20px",
  },
  viewAll: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  auctionTxt: {
    fontSize: "30px",
    fontWeight: "700",
    fontFamily: "jost",
  },
  viewAllTxt: {
    fontSize: "16px",
    fontWeight: "700",
  },
  headTitle: {
    fontSize: "18px",
    fontWeight: "700",
    width: "fit-content",
    backgroundImage: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  btnBox:{
    width:'100%',
    paddingTop:'30px',
    textAlign:'center',
  },  
  headTitleHR: {

    backgroundImage: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    WebkitTextFillColor: "transparent",
    position: "absolute",
    height: "2px",
    width: "45px",
    top: "12px",
    left: "190px",
  },

}));

const auctionData = [
  {
    imgSrc: "images/auction_1.jpg",
    cardName: "Walking On Air",
    ownedBy: "Richard",
    ethAmount: "1.5 ETH",
    ethCount: "1 of 1",
  },
  {
    imgSrc: "images/auction_2.jpg",
    cardName: "Domain Names",
    ownedBy: "John Deo",
    ethAmount: "2.7 ETH",
    ethCount: "1 of 1",
  },
  {
    imgSrc: "images/auction_3.jpg",
    cardName: "Trading Cards",
    ownedBy: "Arham",
    ethAmount: "2.3 ETH",
    ethCount: "1 of 1",
  },
  {
    imgSrc: "images/auction_4.jpg",
    cardName: "Industrial Revolution",
    ownedBy: "Yasmin",
    ethAmount: "1.8 ETH",
    ethCount: "1 of 1",
  },
];

function Explore() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <Box className={classes.headBax}>
         
          <span
              style={{ position: "relative" }}
              className={classes.headTitle}
            >
              EXCLUSIVE ASSETS
              <span className={classes.headTitleHR} />
            </span>
          <Box className={classes.subHeadBox}>
            <Typography className={classes.auctionTxt}>Explore</Typography>
            <Box className={classes.viewAll}>
              <Typography className={classes.viewAllTxt}>View All</Typography>
              <ArrowForwardIcon />
            </Box>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {auctionData.map((item, index) => (
            <Grid item sm={6} md={3} key={index}>
              <Box className={classes.card}>
                <img src={item.imgSrc} alt="card" className={classes.cardImg} />
                <Box className={classes.cardBox}>
                  <Typography className={classes.cardName}>
                    {item.cardName}
                  </Typography>
                  <Typography className={classes.subTXT}>
                    <span className={classes.spanTXT}> Owned By </span>
                    {item.ownedBy}
                  </Typography>
                  <Box className={classes.cardEnd}>
                    <Typography className={classes.subTXT}>
                      {item.ethAmount}
                    </Typography>
                    <Typography className={classes.subTXT}>
                      {item.ethCount}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    startIcon={<LocalMallOutlinedIcon />}
                  >
                    Place a Bid
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box className={classes.btnBox}>
        <Button variant="outlined" className={classes.button}>
          Learn More
        </Button>
        </Box>
        
      </Container>
    </div>
  );
}

export default Explore;
