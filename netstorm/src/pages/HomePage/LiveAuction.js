import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../App.css";
import {
  Avatar,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles({
  cardImg: {
    width: "80%",
    marginTop: "10px",
    borderRadius: "5px",
  },
  subContentBox: {
    margin: "25px",
    paddingTop: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  title: {
    fontFamily: "jost",
    textAlign: "start",
    fontSize: "20px",
    fontWeight: "900",
    transition: "color 0.3s ease-in-out, cursor 0.5s ease-in-out",
    "&:hover": {
      color: "#4528dc",
    },
  },

  avatarDetail: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    paddingTop: "10px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
  },
  cardEnd: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "15px",
  },
  headBax: {
    paddingTop: "100px",
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

function TestimonialCard({ image, title, avatar, name, bnb, of }) {
  const classes = useStyles();
  return (
    <div className="testimonial-card">
      <Box>
        <img src={image} alt="card" className={classes.cardImg} />
        <Box className={classes.subContentBox}>
          <Typography className={classes.title}>{title}</Typography>
          <Box className={classes.avatarDetail}>
            <Avatar src={avatar} />
            <Typography className={classes.name}>{name}</Typography>
          </Box>
          <Box className={classes.cardEnd}>
            <Typography className={classes.name}>{bnb}</Typography>
            <Typography className={classes.name}>{of}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

const items = [
  <TestimonialCard
    image="images/auction_1.jpg"
    title="Virtual Worlds"
    avatar="images/avatar_1.jpg"
    name="@Richard"
    bnb="1.5 BNB"
    of="1 of 1"
  />,
  <TestimonialCard
    image="images/auction_2.jpg"
    title="Collectibles"
    avatar="images/avatar_2.jpg"
    name="@JohnDeo"
    bnb="2.7 BNB"
    of="1 of 1"
  />,
  <TestimonialCard
    image="images/auction_3.jpg"
    title="Arts"
    avatar="images/avatar_3.jpg"
    name="@MKHblots"
    bnb="2.3 BNB"
    of="1 of 1"
  />,
  <TestimonialCard
    image="images/auction_4.jpg"
    title="Robotic Arts"
    avatar="images/avatar_4.jpg"
    name="@RioArham"
    bnb="1.8 BNB"
    of="1 of 1"
  />,
  <TestimonialCard
    image="images/auction_5.jpg"
    title="Design Illusions"
    avatar="images/avatar_5.jpg"
    name="@ArtNox"
    bnb="1.7 BNB"
    of="1 of 1"
  />,
  <TestimonialCard
    image="images/auction_6.jpg"
    title="Photography"
    avatar="images/avatar_6.jpg"
    name="@Junaid"
    bnb="3.5 BNB"
    of="1 of 1"
  />,
  <TestimonialCard
    image="images/auction_1.jpg"
    title="Virtual Worlds"
    avatar="images/avatar_1.jpg"
    name="@Richard"
    bnb="1.5 BNB"
    of="1 of 1"
  />,
  <TestimonialCard
    image="images/auction_2.jpg"
    title="Collectibles"
    avatar="images/avatar_2.jpg"
    name="@JohnDeo"
    bnb="2.7 BNB"
    of="1 of 1"
  />,
  <TestimonialCard
    image="images/auction_3.jpg"
    title="Arts"
    avatar="images/avatar_3.jpg"
    name="@MKHblots"
    bnb="2.3 BNB"
    of="1 of 1"
  />,
];

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  600: { items: 2 },
  900: { items: 3 },
  1300: { items: 4 },
};

export default function LiveAuction() {
  const classes = useStyles();

  return (
    <div id="testimonials">
      <div className="testimonial-container">
        <Container>
          <Box className={classes.headBax}>
            
            <span
              style={{ position: "relative" }}
              className={classes.headTitle}
            >
              AUCTIONS
              <span className={classes.headTitleHR} />
            </span>
            <Box className={classes.subHeadBox}>
              <Typography className={classes.auctionTxt}>
                Live Auctions
              </Typography>
              <Box className={classes.viewAll}>
                <Typography className={classes.viewAllTxt}>View All</Typography>
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Box>
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoPlay
            infinite
            autoPlayInterval={1000}
            animationDuration={1000}
          />
        </Container>
      </div>
    </div>
  );
}
