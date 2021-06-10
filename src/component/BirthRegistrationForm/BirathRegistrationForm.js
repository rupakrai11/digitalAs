import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import '../../styles/birthregistration.scss';
import StarRateIcon  from '@material-ui/icons/StarRate';
import firebase from './../../utils/firebase';
import { SentimentVeryDissatisfiedSharp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Welcome from './../../pages/welcome';
import { FooterCom, NavbarCom } from './../common/commmoncomponent';

export default function BirthRegistrationForm() {
const firestore = firebase.firestore();
const history = useHistory();
const [error,setError]=useState('');

// const[firstName,setFirstname]=useState();
const[data,setData]=useState({
firstName:'',
lastName:'',
fatherName:'',
motherName:'',
grandFatherName:'',
wardNumber:'',
dob:'',
religion:''
})
const inputEvent=(event)=>
{
const{name,value}=event.target;
setData((preVal)=>{
return{
...preVal,
[name]:value,
}
})
}


const CreatData=(e)=>{
e.preventDefault();

if(data.firstName==''||data.lastName==''
||data.fatherName==''||
data.motherName==''||
data.grandFatherName==''||data.wardNumber==''||
data.dob==''||data.religion=='')
{
setError("कृपया पुरा डाटा भर्नुहोस्");

}
else{
firestore.collection("birthregistration").add({
firstName:data.firstName,
lastName:data.lastName,
fatherName:data.fatherName,
motherName:data.motherName,
grandFatherName:data.grandFatherName,
wardNumber:data.wardNumber,
dob:data.dob,
religion:data.religion,
status:"pending"
});
history.push('/registration/welcome');

}



}


          return (
          <React.Fragment>
          <NavbarCom/>
          <div className="from_wrapper">
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
          <Typography variant="h4" gutterBottom className="heading-textf" >
          जन्म दर्ता गेर्नुहोस्
          </Typography>

          <Grid item xs={12} sm={12}>
          <Typography className="head-top" > शिशुको  बिवरन:</Typography>
          </Grid>
          </Grid>


          <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="heading-textf" >
          First Name&nbsp;(पहिलो नाम):<StarRateIcon  id="startIcon"></StarRateIcon>
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


          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="heading-textf">
          Last Name&nbsp;(थर):<StarRateIcon  id="startIcon"></StarRateIcon>
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
          <Typography variant="h6" gutterBottom className="heading-textf">
          Father's Name&nbsp;(बुवाको नाम):<StarRateIcon  id="startIcon"></StarRateIcon>
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
          <Typography variant="h6" gutterBottom className="heading-textf">
          Mother's Name (आमाको नाम):<StarRateIcon  id="startIcon"></StarRateIcon>
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


          />
          </Grid>
          <Grid item xs={12} sm={6} >
          <Typography variant="h6"
          gutterBottom 
          className="heading-textf">
          बाजेको नाम:<StarRateIcon  id="startIcon"></StarRateIcon> 
          </Typography>
          <TextField
          required
          id="Grand Father's Name"
          name="grandFatherName"
          label="Grand Father's Name" 
          fullWidth
          autoComplete="shipping country"
          variant="outlined"
          value={data.grandFatherName}
          onChange={inputEvent}
          margin="dense"

          />
          </Grid>
          <Grid item xs={12} sm={6} className="heading-textf">
          <Typography variant="h6" gutterBottom className="heading-textf">
          Ward Number&nbsp;(वडा नम्बर):<StarRateIcon  id="startIcon"></StarRateIcon>
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
          <Typography variant="h6" gutterBottom className="heading-textf">
          Date Of Birth&nbsp;(जन्म मिती):<StarRateIcon  id="startIcon"></StarRateIcon>
          </Typography>
          <TextField 
          required
          id="  Date Of Birth" 
          name="dob" 
          label="Date Of Birth" fullWidth
          variant="outlined" 
          value={data.dob}
          onChange={inputEvent}
          margin="dense"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="heading-textf">
          Religion&nbsp;(धर्म):<StarRateIcon  id="startIcon"></StarRateIcon>
          </Typography>
          <TextField
          required
          id="Religion"
          name="religion"
          label="Religion"
          fullWidth
          autoComplete="shipping postal-code"
          variant="outlined"
          value={data.religion}
          onChange={inputEvent}
          margin="dense"
          />
          </Grid>

          {error?
          <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className="head-top-error">

          {error}
          </Typography>
          </Grid>
          :''}
          <Grid item xs={12}>
          <Button 
          variant="contained"
          color="primary"
          onClick={CreatData}

          // className={classes.button}
          >
          पेस गेर्नुहोस्
          </Button>
          </Grid>
          </Grid>

          </div>
          <FooterCom/>
          </React.Fragment>
          );
          }






