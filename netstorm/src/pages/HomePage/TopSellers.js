import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "60px",
    height: "60px",
  },
  card: {
    backgroundColor: "#16151a",
    borderRadius: "10px",
    display: "flex",
    paddingLeft: "10px",
    paddingBottom: "20px",
    gap: "15px",
    paddingTop: "20px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out, cursor 0.5s ease-in-out",
    "&:hover": {
      color: "#4528dc",
    },
  },
  txt: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#8e8e8e",
  },
  headTitle: {
    fontSize: "18px",
    fontWeight: "700",
    width: "fit-content",
    backgroundImage: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  headTitleHR: {

    backgroundImage: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    WebkitTextFillColor: "transparent",
    position: "absolute",
    height: "2px",
    width: "45px",
    top: "12px",
    left: "180px",
  },
  sellerTxt: {
    fontSize: "30px",
    fontWeight: "700",
    fontFamily: "jost",
    paddingBottom: "20px",
    paddingTop: "10px",
  },
  container: {
    paddingTop: "80px",
  },
}));

function TopSellers() {
  const classes = useStyles();

  const sellersData = [
    { name: "@Richard", amount: "1.5 BNB", avatarSrc: "images/avatar_1.jpg" },
    { name: "@JohnDeo", amount: "2.3 BNB", avatarSrc: "images/avatar_2.jpg" },
    { name: "@Junaid", amount: "2.5 BNB", avatarSrc: "images/avatar_3.jpg" },
    { name: "@Yasmin", amount: "1.9 BNB", avatarSrc: "images/avatar_4.jpg" },
    { name: "@ArhamH", amount: "3.2 BNB", avatarSrc: "images/avatar_5.jpg" },
    { name: "@Sara", amount: "4.7 BNB", avatarSrc: "images/avatar_6.jpg" },
  ];

  return (
    <Container className={classes.container}>
      <span style={{ position: "relative" }} className={classes.headTitle}>
        CREATIVE ARTIST
        <span className={classes.headTitleHR} />
      </span>
      <Typography className={classes.sellerTxt}>Top Sellers</Typography>
      <Grid container spacing={4}>
        {sellersData.map((seller, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box className={classes.card}>
              <Avatar className={classes.avatar} src={seller.avatarSrc} />
              <Box>
                <Typography className={classes.name}>{seller.name}</Typography>
                <Typography className={classes.txt}>{seller.amount}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TopSellers;
