import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

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
  title: {
    fontSize: "16px",
    fontWeight: "700",
    width: "fit-content",
    backgroundImage: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    WebkitBackgroundClip: "text",
    textAlign: "center",
    WebkitTextFillColor: "transparent",
  },
  formHead: {
    marginTop: "150px",
    width: "50%",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 880px)": {
      width: "80%",
    },
    "@media (max-width: 600px)": {
      width: "80%",
    },
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
  getTxt: {
    fontSize: "2rem",
    fontWeight: "600",
    fontFamily: "jost",
  },
  contactDes: {
    fontSize: "1.1rem",
    fontWeight: "600",
    lineHeight: "1.5",
    fontFamily: "poppins",
    color: "#8E8E8E",
    textAlign: "center",
    paddingBottom: "30px",
  },
  form: {
    width: "100%",
  },
  card: {
    padding: "45px !important",
    backgroundColor: "#16151A",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    cursor: "pointer",
    alignItems: "center",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",

      color: "blue",
    },
  },
  cardImage: {
    width: "80px",
    height: "80px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontFamily: "jost",
    fontWeight: "600",
    transition: "color 0.3s ease",
  },
  cardSubText: {
    textAlign: "center",
    color: "#8E8E8E",
    fontSize: "17px",
    fontWeight: "600",
    wordWrap: "break-word",
    lineHeight: "1.5",
  },
}));

const cardData = [
  {
    imageSrc: "images/metamask.png",
    title: "MetaMask",
    subText:
      "A browser extension with great flexibility. The web's most popular wallet",
  },
  {
    imageSrc: "images/authereum.png",
    title: "Authereum",
    subText:
      "A user-friendly wallet that allows you to sign up with your phone number on any device",
  },
  {
    imageSrc: "images/walletconnect.png",
    title: "WalletConnect",
    subText:
      "Pair with Trust, Argent, MetaMask & more. Works from any browser, without an extension",
  },
  {
    imageSrc: "images/dapper.png",
    title: "Dapper",
    subText:
      "A security-focused cloud wallet with pin codes and multi-factor authentication",
  },
  {
    imageSrc: "images/kaikas.png",
    title: "Kaikas",
    subText:
      "A simple-to-use wallet that works on both mobile and through a browser extension",
  },
];

function WalletConnect() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={classes.mainContainer}>
        <Typography className={classes.headTitle}>Wallet Connect</Typography>
        <Typography className={classes.subTitle}>
          <span className={classes.pointer} onClick={() => navigate("/")}>
            Home
          </span>{" "}
          {"> "}
          <span className={classes.pointer}>Pages</span>
          {" >"} Wallet Connect
        </Typography>
      </div>
      <Container className={classes.formContainer}>
        <Box className={classes.formHead}>
          <Typography className={classes.title}>WALLTE CONNECT</Typography>
          <Typography className={classes.getTxt}>
            Connect your Wallet
          </Typography>
          <Typography className={classes.contactDes}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </Typography>
        </Box>
      </Container>
      <Container>
        <Grid container spacing={4} style={{ justifyContent: "center" }}>
          {cardData.map((card, index) => (
            <Grid item sm={6} md={4} key={index}>
              <Box className={classes.card}>
                <img
                  src={card.imageSrc}
                  className={classes.cardImage}
                  alt={card.title}
                />
                <Typography className={classes.cardTitle}>
                  {card.title}
                </Typography>
                <Typography className={classes.cardSubText}>
                  {card.subText}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4}></Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default WalletConnect;
