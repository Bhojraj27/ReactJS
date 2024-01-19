import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SendIcon from "@material-ui/icons/Send";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Box,
  Button,
  Container,
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
    paddingBottom:'30px',
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
    gap: "30px",
    flexDirection: "column",
    padding: "50px 30px",
    borderRadius: "10px",
  },
  fieldBox:{
    height:'70px'
  },
  errorMsg:{
    color:'red',
    fontSize:'14px',
    paddingTop:'5px',
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

function Contact() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.mainContainer}>
        <Typography className={classes.headTitle}>Contact</Typography>
        <Typography className={classes.subTitle}>
          <span className={classes.pointer} onClick={()=>navigate('/')}>Home</span> {"> "}
          <span className={classes.pointer}>Pages</span>
          {" >"} Contact
        </Typography>
      </div>
      <Container className={classes.formContainer}>
        <Box className={classes.formHead}>
          <Typography className={classes.title}>CONTACT</Typography>
          <Typography className={classes.getTxt}>Get In Touch</Typography>
          <Typography className={classes.contactDes}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </Typography>

       
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm  }) => {
              // Handle form submission
              console.log(values);
              toast.success('Message sent successfully!', {
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
                    name="name"
                    placeholder="Name"
                  />
                  <ErrorMessage name="name" component="div" className={classes.errorMsg}/>
                </Box>

                <Box className={classes.fieldBox}>
                  <Field
                    as={CustomTextField}
                    fullWidth
                    variant="filled"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component="div" className={classes.errorMsg}/>
                </Box>
                <Box className={classes.fieldBox} >
                  <Field
                    as={CustomTextField}
                    fullWidth
                    variant="filled"
                    name="subject"
                    placeholder="Subject"
                  />
                  <ErrorMessage name="subject" component="div" className={classes.errorMsg}/>
                </Box>
                <Box style={{height:'120px'}}>
                <Field
                  as={CustomTextField}
                  fullWidth
                  multiline
                  
                  rows={4}
                  variant="filled"
                  name="message"
                  placeholder="Message"
                  />
                <ErrorMessage name="message" component="div" className={classes.errorMsg}/>
                  </Box>
                  <ToastContainer />
                <Button className={classes.sendBtn} fullWidth type="submit">
                  <SendIcon />
                  Send Message
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
