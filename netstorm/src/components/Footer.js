import React, { useState } from 'react';
import { Box,  Container, Divider, Grid, IconButton, InputAdornment, TextField, Typography, makeStyles, withStyles } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SendIcon from '@material-ui/icons/Send';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#16151a',
        marginTop: '100px',
        paddingTop: '100px',
        
    },
    txt: {
        paddingTop: '20px',
        fontSize: '1rem',
        fontFamily: 'poppins',
        fontWeight: '400',
        lineHeight: '1.5'
    },
    iconButton: {
        position: 'relative',
        transition: 'top 0.2s',
        color: 'white',
        '&:hover $arrowUp': {
            top: '-35px',
            
        },
        '&:hover $arrowDown': {
            top: '0px',
            display: 'block',
            opacity: 100,
            transition: 'top 0.2s'
        },
    },
    arrowUp: {
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'top 0.2s, opacity 0.2s',
    },
    arrowDown: {
        position: 'absolute',
        top: 35,
        
        left: 0,
        transition: 'top 0.2s',

    },
    iconBtn: {
        display: 'flex',
        gap: '15px',
        marginTop: '25px',
        alignItems: 'center',

    },
    iconBCK: {
        padding: '7px',
        backgroundColor: '#212529',
        borderRadius: '3px',
        marginBottom:'20px',
        overflow:'hidden'
    },
    linkTxt: {
        fontFamily: 'poppins',
        fontWeight: '700',
        fontSize: '23px',

    },
    listItem: {
        listStyle: "none",
        cursor: "pointer",
        fontSize: '16px',
        lineHeight: '40px',
        fontFamily: 'poppins',
        fontWeight: '500',
        padding: '0px',
        paddingBottom:'20px'
    },
    sendIcon:{
        color:'white', 
        borderRadius:'50% 0 0 50%',
        background:'linear-gradient(150deg, #57048a 0%, #4528dc 78%)',
        padding:'15px 25px'
    },
    divider:{
        backgroundColor:'white', 
        marginTop:'80px',
        marginBottom:'20px',
    },
    rightsTxt:{
        fontSize:'16px',
        fontWeight:'500',
        fontFamily:'poppins',
        display:'flex',
        alignItems:'center'
    },
    rightsBox:{

        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:'30px',
        "@media (max-width: 559px)": {
            justifyContent:'center',
        }
    },

}))
const CustomTextField = withStyles({
    root: {
      '& .MuiInputBase-root': {
        padding: 0, // Remove padding
        backgroundColor:'#191919',
        color:'#8e8e8e',
        fontFamily:'poppins',
        marginBottom:'30px',
        marginTop:'20px'

      },
    },
  })(TextField);

const socialMediaIcons = [
    {
        name: 'Facebook',
        icon: FacebookIcon,
    },
    {
        name: 'Twitter',
        icon: TwitterIcon,
    },
    {
        name: 'Instagram',
        icon: InstagramIcon,
    },
    {
        name: 'YouTube',
        icon: YouTubeIcon,
    },
];
const Footer = () => {
    const classes = useStyles();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <footer className={classes.footer}>
            <Container >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <img src='images/logo.png' alt='logo' />
                        <Typography className={classes.txt} >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.
                        </Typography>
                        <Box className={classes.iconBtn}>
                            {socialMediaIcons.map((socialMedia, index) => (
                                <Box key={index} className={classes.iconBCK}>
                                    <IconButton
                                        className={classes.iconButton}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <socialMedia.icon
                                            className={`${classes.arrowUp} ${isHovered ? 'show' : ''}`}
                                        />
                                        <socialMedia.icon
                                            className={`${classes.arrowDown} ${isHovered ? 'show' : ''}`}
                                        />
                                        
                                        
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography className={classes.linkTxt}>Useful Links</Typography>
                        <ul className={classes.listItem}>
                            <li>All NFTs</li>
                            <li>How It Works</li>
                            <li>Create</li>
                            <li>Explore</li>
                            <li>Privacy & Terms</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography className={classes.linkTxt}>Community</Typography>
                        <ul className={classes.listItem}>
                            <li>Help Center</li>
                            <li>Partners</li>
                            <li>Suggestions</li>
                            <li>Blog</li>
                            <li>Newsletter</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography className={classes.linkTxt}>Subscribe Us</Typography>
                        <CustomTextField 
                            variant="filled"
                            placeholder="info@yourmail.com"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton  variant="contained" className={classes.sendIcon}>
                                            <SendIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                </Grid>
                <Divider className={classes.divider}/>
                <Box className={classes.rightsBox}>
                    <Typography className={classes.rightsTxt}>©2022 NetStorm, All Rights Reserved.</Typography>
                    <Typography className={classes.rightsTxt}>Made with <FavoriteIcon/>  By Themeland</Typography>
                </Box>
            </Container>
        </footer>
    );
};

export default Footer;

