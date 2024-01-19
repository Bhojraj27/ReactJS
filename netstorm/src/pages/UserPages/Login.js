import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
  makeStyles,
  withStyles,
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
  sendBtn: {
    background: "linear-gradient(150deg, #57048a 0%, #4528dc 78%)",
    color: "white",
    height: "50px",
    borderRadius: "50px",
    fontWeight: "700",
  },
  formField: {
    width: "100%",
    backgroundColor: "#16151A",
    display: "flex",
    gap: "25px",
    flexDirection: "column",
    padding: "50px 30px",
    borderRadius: "10px",
  },
  fieldBox: {
    height: "70px",
  },
  errorMsg: {
    color: "red",
    fontSize: "14px",
    paddingTop: "5px",
  },
  checkField: {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
  },
  checkBox: {
    color: "white",
  },
  divider: {
    backgroundColor: "#ffffff26",
    width: "100%",
    marginBottom: "35px",
    marginTop:'35px'
  },
  dividerBox:{
    color:"#ffffff26",
    display:'flex', 
    flexDirection:'column', 
    alignItems:'center'
  },
  iconButton: {
    position: 'relative',
    transition: 'top 0.2s',
    color: 'white',
    '&:hover $arrowUp': {
        top: '-15px',
        opacity: 0,
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
    top: 15,
    opacity: 0,
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
   
},
}));
const CustomTextField = withStyles({
  root: {
    "& .MuiInputBase-root": {
      backgroundColor: "#09080d",
      color: "#8e8e8e",
      fontWeight: "bold",
      fontFamily: "poppins",

      borderRadius: "0px",
    },
  },
})(TextField);

const GreenCheckbox = withStyles({
  root: {
    color: "white", // Change the color to your desired color
    "&$checked": {
      color: "white", // Change the checked color to your desired color
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
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

];

function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit."
      ),
  });

  const classes = useStyles();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
      setIsHovered(true);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className={classes.mainContainer}>
        <Typography className={classes.headTitle}>Login</Typography>
        <Typography className={classes.subTitle}>
          <span className={classes.pointer} onClick={()=>navigate('/')}>Home</span> {"> "}
          <span className={classes.pointer}>Pages</span>
          {" >"} Login
        </Typography>
      </div>
      <Container className={classes.formContainer}>
        <Box className={classes.formHead}>
          <Typography className={classes.title}>LOGIN</Typography>
          <Typography className={classes.getTxt}>
            Login to your Account
          </Typography>
          <Typography className={classes.contactDes}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // Handle form submission
              console.log(values);
              toast.success("Log In successfully!", {
                onClose: () => resetForm(), // Reset the form after the toast is closed
              });
              setSubmitting(false);
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className={classes.formField}>
                <Box className={classes.fieldBox}>
                  <Field
                    as={CustomTextField}
                    fullWidth
                    variant="filled"
                    name="email"
                    placeholder="Enter your Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={classes.errorMsg}
                  />
                </Box>

                <Box className={classes.fieldBox}>
                  <Field
                    as={CustomTextField}
                    fullWidth
                    variant="filled"
                    name="password"
                    type="password"
                    placeholder="Enter your Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={classes.errorMsg}
                  />
                </Box>

                <Box className={classes.checkField}>
                  <FormControlLabel
                    control={<GreenCheckbox checked />}
                    label="Remember Me"
                  />
                </Box>
                <ToastContainer />
                <Box className={classes.dividerBox}>
                  <Button className={classes.sendBtn} fullWidth type="submit">
                    Sign In
                  </Button>
                  <Divider className={classes.divider}/>
                  <Typography >Or</Typography>
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
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
