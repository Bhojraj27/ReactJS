import {
  Container,
  Grid,
  SvgIcon,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: "100px",
  },
  icon: {
    fontSize: "60px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "25px",
    fontWeight: "700",
    paddingBottom: "25px",
    fontFamily: "jost",
  },
  content: {
    fontSize: "1rem",
    color: "#8E8E8E",
    fontWeight: "400",
    fontFamily: "poppins",
  },
  headTitle: {
    fontSize: "18px",
    fontWeight: "700",
    width: "fit-content",
    backgroundImage: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  sellerTxt: {
    fontSize: "30px",
    fontWeight: "700",
    fontFamily: "jost",
    paddingBottom: "50px",
    paddingTop: "10px",
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

const steps = [
  {
    id: 1,
    title: "Set up your wallet",
    content:
      "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.",
    path: "M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z",
  },
  {
    id: 2,
    title: "Create your collection",
    content:
      "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    path: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
  },
  {
    id: 3,
    title: "Add your NFTs",
    content:
      "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
    path: "M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z",
  },
  {
    id: 4,
    title: "List them for sale",
    content:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
    path: "M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z",
  },
];

const GradientWalletIcon = ({ title, content, path }) => (
  <SvgIcon style={{ fontSize: "60px", marginBottom: "20px" }}>
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(78)">
        <stop offset="0%" stopColor="#57048a" />
        <stop offset="100%" stopColor="#4528dc" />
      </linearGradient>
    </defs>
    <path d={path} fill="url(#gradient)" />
  </SvgIcon>
);
function SellNFT() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.mainContainer}>
        {/* <Typography className={classes.headTitle}>HOW IT WORKS ---</Typography> */}
        <span style={{ position: "relative" }} className={classes.headTitle}>
        HOW IT WORKS
          <span className={classes.headTitleHR} style={{}} />
        </span>
        <Typography className={classes.sellerTxt}>
          Create and sell your NFTs
        </Typography>

        <Grid container spacing={3}>
          {steps.map((step) => (
            <Grid item sm={6} md={3} key={step.id}>
              <GradientWalletIcon path={step.path} />
              <Typography className={classes.title}>{step.title}</Typography>
              <Typography className={classes.content}>
                {step.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default SellNFT;
