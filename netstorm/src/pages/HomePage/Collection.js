import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "100px",
   
  },
  g1:{
    "@media (max-width: 600px)": {
        justifyContent: "center",
    }
  },
  card: {
    backgroundColor: "#16151a",
    borderRadius: "10px",
    display: "flex",
    width: "250px",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    margin:'10px',
    position: "relative",
    cursor: "pointer",
    "@media (max-width: 1150px)": {
        width: "200px",
    },
    "@media (max-width: 960px)": {
        width:'350px'
    },
    "@media (max-width: 780px)": {
        width:'250px'
    },
    "@media (max-width: 600px)": {
        width:'300px'
    },
    "&:hover": {
      color: "#4528dc",
    },

  },
  
  cardIMG: {
    width: "85%",
    borderRadius: "5px",
  },
  avatar: {
    width: "60px",
    height: "60px",
    position: "absolute",
    top: "45%",
    left: "37%",
    "@media (max-width: 1150px)": {
        top: "38%",
    left: "37%",
    },
    "@media (max-width: 960px)": {
        top: "55%",
        left: "40%",
    },
    "@media (max-width: 780px)": {
        top: "45%",
        left: "40%",
    },
    "@media (max-width: 600px)": {
        top: "50%",
        left: "40%",
    },

  },
  textBox: {
    paddingTop: "50px",
    textAlign: "center",
  },
  title: {
    fontFamily: "jost",
    textAlign: "start",
    fontSize: "22px",
    fontWeight: "900",
    transition: "color 0.3s ease-in-out, cursor 0.5s ease-in-out",
    "&:hover": {
      color: "#4528dc",
    },
  },
  subTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#8e8e8e",
    paddingBottom:'20px',
  },
  headBax: {
    width: "100%",
    textAlign: "start",
  },
  headTitle: {
    fontSize: "18px",
    fontWeight: "700",
    width: "fit-content",
    backgroundImage: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subHeadBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom:'20px',
  },
  exploreMore:{
    display:'flex',
    alignItems:'center',
    cursor:'pointer',
  
    
  },
  collectionTxt:{
    fontSize:'30px',
    fontWeight:'700',
    fontFamily:'jost'
  },
  exploreMoreTxt:{
    fontSize:'16px',
    fontWeight:'700'
  },
  headTitleHR: {
    
    backgroundImage: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    WebkitTextFillColor: "transparent",
    position: "absolute",
    height: "2px",
    width: "45px",
    top: "12px",
    left: "160px",
  },
}));

const data = [
    {
      imgSrc: "images/author_1.jpg",
      avatarSrc: "images/avatar_1.jpg",
      title: "Virtual Worlds",
      subTitle: "ERC-729",
    },
    {
      imgSrc: "images/author_2.jpg",
      avatarSrc: "images/avatar_2.jpg",
      title: "Digital Arts",
      subTitle: "ERC-522",
    },
    {
      imgSrc: "images/author_3.jpg",
      avatarSrc: "images/avatar_3.jpg",
      title: "Sports",
      subTitle: "ERC-459",
    },
    {
      imgSrc: "images/author_4.jpg",
      avatarSrc: "images/avatar_4.jpg",
      title: "Sports",
      subTitle: "ERC-873",
    },
    {
      imgSrc: "images/author_5.jpg",
      avatarSrc: "images/avatar_5.jpg",
      title: "Trading Cards",
      subTitle: "ERC-397",
    },
    {
      imgSrc: "images/author_6.jpg",
      avatarSrc: "images/avatar_6.jpg",
      title: "Walking On Air",
      subTitle: "ERC-403",
    },
    {
      imgSrc: "images/author_7.jpg",
      avatarSrc: "images/avatar_7.jpg",
      title: "Domain Names",
      subTitle: "ERC-687",
    },
    {
      imgSrc: "images/author_8.jpg",
      avatarSrc: "images/avatar_8.jpg",
      title: "Collectibles",
      subTitle: "ERC-972",
    },
    
  ];
  

function Collection() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
      <Box className={classes.headBax}>
            {/* <Typography className={classes.headTitle}>MOST POPULAR ---</Typography> */}
            <span
              style={{ position: "relative" }}
              className={classes.headTitle}
            >
              MOST POPULAR
              <span className={classes.headTitleHR} />
            </span>
            <Box className={classes.subHeadBox}>
              <Typography className={classes.collectionTxt}>Popular Collection</Typography>
              <Box className={classes.exploreMore}>
                <Typography className={classes.exploreMoreTxt}>Explore More</Typography>
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Box>
      <Grid container spacing={5} className={classes.g1}>
  {data.map((item, index) => (
    <Grid item sm={6} md={3} lg={3} key={index}>
      <Box className={classes.card}>
        <img src={item.imgSrc} alt ='card'className={classes.cardIMG} />
        <Avatar className={classes.avatar} src={item.avatarSrc} />
        <Box className={classes.textBox}>
          <Typography className={classes.title}>{item.title}</Typography>
          <Typography className={classes.subTitle}>{item.subTitle}</Typography>
        </Box>
      </Box>
    </Grid>
  ))}
</Grid>
      </Container>
    </div>
  );
}

export default Collection;
