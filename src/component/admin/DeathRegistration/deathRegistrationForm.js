import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import "../../../styles/birthregistration.scss";
import StarRateIcon from "@material-ui/icons/StarRate";
import firebase from "../../../utils/firebase";
import { SentimentVeryDissatisfiedSharp } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { FooterCom, NavbarCom } from "./../../common/commmoncomponent";

export default function DeathRegistrationForm() {
  const firestore = firebase.firestore();
  const history = useHistory();
  console.log(firestore);
  // const[firstName,setFirstname]=useState();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    relationship: "",
    wardNumber: "",
    deathdate: "",
    deathtime: "",
    dob: "",
    causeofdeath: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const DeathRegister = (e) => {
    e.preventDefault();
    firestore.collection("deathregistration").add({
      firstName: data.firstName,
      lastName: data.lastName,
      fatherName: data.fatherName,
      motherName: data.motherName,
      relationship: data.relationship,
      wardNumber: data.wardNumber,
      deathdate: data.deathdate,
      deathtime: data.deathtime,
      causeofdeath: data.causeofdeath,
      status: "pending",
    });
    history.push("/registration/welcome");
  };

  return (
    <React.Fragment>
      <NavbarCom />
      <div className="from_wrapper">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom className="heading-textf">
              मृत्‍यु दर्ता गर्नुहोस्
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography className="head-top"> १ मृतकको बिवरन:</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="p" gutterBottom className="heading-textf">
              मृत्‍यु हुने ब्यक्तीको नाम:
              <StarRateIcon id="startIcon"></StarRateIcon>
            </Typography>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="off"
              variant="outlined"
              value={data.firstName}
              onChange={inputEvent}
              margin="dense"
              className="textfield"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="p" gutterBottom className="heading-textf">
              थर:<StarRateIcon id="startIcon"></StarRateIcon>
            </Typography>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
              value={data.lastName}
              onChange={inputEvent}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="p" gutterBottom className="heading-textf">
              मृत्‍यु हुने ब्यक्तीको बुवाको नाम:
              <StarRateIcon id="startIcon"></StarRateIcon>
            </Typography>
            <TextField
              required
              id="Father's Name"
              name="fatherName"
              label="Father's Name"
              fullWidth
              autoComplete="shipping address-line1"
              variant="outlined"
              value={data.fathertName}
              onChange={inputEvent}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="p" gutterBottom className="heading-textf">
              मृत्‍यु हुने ब्यक्तीको आमाको नाम:
              <StarRateIcon id="startIcon"></StarRateIcon>
            </Typography>
            <TextField
              required
              id="Mother's Name"
              name="motherName"
              label="Mother's Name"
              fullWidth
              autoComplete="shipping address-line2"
              variant="outlined"
              value={data.motherName}
              onChange={inputEvent}
              margin="dense"
              // style={{height:"1px"}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="p"
              gutterBottom
              align="left"
              className="heading-textf"
            >
              दर्ता गेर्ने ब्यक्ती को नाता:
              <StarRateIcon id="startIcon"></StarRateIcon>
            </Typography>
            <TextField
              required
              id="Grand Father's Name"
              name="relationship"
              label="Grand Father's Name"
              fullWidth
              autoComplete="shipping country"
              variant="outlined"
              value={data.relationship}
              onChange={inputEvent}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} sm={6} className="heading-textf">
            <Typography variant="p" gutterBottom className="heading-textf">
              वडा नम्बर:<StarRateIcon id="startIcon"></StarRateIcon>
            </Typography>
            <TextField
              required
              id="  Ward Number"
              name="wardNumber"
              label="  Ward Number"
              fullWidth
              autoComplete="shipping address-level2"
              variant="outlined"
              value={data.wardNumber}
              onChange={inputEvent}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="p" gutterBottom className="heading-textf">
              मृत्‍यु भयको समय :<StarRateIcon id="startIcon"></StarRateIcon>
            </Typography>
            <TextField
              required
              id="Date of death"
              name="deathtime"
              label="Date Of Birth"
              fullWidth
              variant="outlined"
              value={data.deathtime}
              onChange={inputEvent}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="p" gutterBottom className="heading-textf">
              मृत्‍यु भयको मिती :<StarRateIcon id="startIcon"></StarRateIcon>
            </Typography>
            <TextField
              required
              id="Religion"
              name="deathdate"
              fullWidth
              autoComplete="shipping postal-code"
              variant="outlined"
              value={data.deathdate}
              onChange={inputEvent}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="p" gutterBottom className="heading-textf">
              मृत्‍यु हुनुको कारण :<StarRateIcon id="startIcon"></StarRateIcon>
            </Typography>
            <TextField
              required
              id="Religion"
              name="causeofdeath"
              label="मृत्‍यु हुनुको कारण"
              fullWidth
              autoComplete="shipping postal-code"
              variant="outlined"
              value={data.causeofdeath}
              onChange={inputEvent}
              margin="dense"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={DeathRegister}

              // className={classes.button}
            >
              पेस गेर्नुहोस्
            </Button>
          </Grid>
        </Grid>
      </div>
      <FooterCom />
    </React.Fragment>
  );
}
