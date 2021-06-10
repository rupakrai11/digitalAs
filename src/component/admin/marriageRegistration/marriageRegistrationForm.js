import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import '../../../styles/marriageRegistrationForm.scss';
import StarRateIcon  from '@material-ui/icons/StarRate';
import firebase from '../../../utils/firebase'
import { SentimentVeryDissatisfiedSharp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { FooterCom, NavbarCom } from './../../common/commmoncomponent';


export default function MarriageRegistrationForm() {
  const firestore = firebase.firestore();
  const history = useHistory();

  // const[firstName,setFirstname]=useState();
  const[error,setError]=useState('');
  const[data,setData]=useState({
    marraiagedate:'',
    marraiagetype:'',
    district:'',
    secondD:'',
    wodanumber:'',
    houseNumber:'',
    hubandsName:'',
    wifeName:'',
    hdob:'',
    wdob:'',
    hoccupation:'',
    woccupation:''

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

  const DeathRegister=(e)=>{
    e.preventDefault();
if(data.marraiagedate==''||
data.marraiagetype==''||data.district==''
||data.secondD==''||data.wodanumber==''||
data.houseNumber==''||data.hubandsName=='' ||data.wifeName=='' 
||data.hdob==''||data.wdob==''
||data.hoccupation==''||
data.woccupation=='')
{
  setError("कृपया पुरा डाटा भर्नुहोस्");

}else{
  
  firestore.collection("marriageregistration").add({
    marraiagedate:data.marraiagedate,
    marraiagetype:data.marraiagetype,
    district:data.district,
    secondD:data.secondD,
    wodanumber:data.wodanumber,
    houseNumber:data.houseNumber,
    hubandsName:data.hubandsName,
    wifeName:data.wifeName,
    hdob:data.hdob,
    wdob:data.wdob,
    hoccupation:data.hoccupation,
    woccupation:data.woccupation,
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
        <Grid item xs={12} text-center >
      
        <Typography variant="h4" gutterBottom className="m-heading-textf" >
        विवाह दर्ता गेर्नुहोस्
      </Typography>
            </Grid>

            {error?
  <Grid item xs={12} sm={12}>
  <Typography variant="h6" gutterBottom className="head-top-error">
     {error}
    </Typography>
</Grid>
:''}

            <Grid item xs={12} sm={6}>
        <Typography variant="p"  gutterBottom className="m-heading-textf">
      विवाहको को मिती :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required id="marraiagedate"
             name="marraiagedate" 
             fullWidth autoComplete="shipping postal-code"
            variant="outlined"
            label="विवाहको को मिती"
            value={data.marraiagedate}
            onChange={inputEvent}
            type="date"
            InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
          />
</Grid>

          <Grid item xs={12} sm={6}>
        <Typography variant="p" gutterBottom className="m-heading-textf" >
        विवाहको भयको किसिम :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
      <TextField
            required
            id="firstName"
            name="marraiagetype"
            label="Legal/traditional"
            fullWidth
            autoComplete="off"
            variant="outlined"
            value={data.marraiagetype}
            onChange={inputEvent}
            margin="dense"
          
          />
        
        </Grid> 

<Grid  xs={12} sm={12} className="m-head-top" >
१.विवाह सम्पन्न भयको स्थान 
</Grid>
        

        <Grid item xs={12} sm={6}>
        <Typography variant="p" gutterBottom className="m-heading-textf" >
        जिल्ला :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
      <TextField
            required
            id="firstName"
            name="district"
            label="District"
            fullWidth
            autoComplete="off"
            variant="outlined"
            value={data.district}
            onChange={inputEvent}
            margin="dense"
          />
        
        </Grid>





        <Grid item xs={12} sm={6}>

        <Typography variant="p" gutterBottom className="m-heading-textf">
        गा.बी.स:\न.पा<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
       
          <TextField
            required
            id="lastName"
            name="secondD"
            label="गा.बी.स:\न.पा"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={data.secondD}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="p" gutterBottom className="m-heading-textf">
        वडा नम्बर:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
              required
            id="Mother's Name"
            name="wodanumber"
            label="Woda Number"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            value={data.wodanumber}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>


        <Grid item xs={12} sm={6}>
        <Typography variant="p" gutterBottom className="m-heading-textf">
        घर न:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required
            id="House Number"
            name="houseNumber"
            label="House Number"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            value={data.houseNumber}
            onChange={inputEvent}
            margin="dense"

          />
        </Grid>



        
<Grid  xs={12} sm={12} className="m-head-top">
२.दुलहा दुलहिको बिवरन
</Grid>
        <Grid item xs={12} sm={6} >
        <Typography variant="h6"
        gutterBottom 
        className="m-heading-textf">
        दुलाहको पुरा नाम :<StarRateIcon  id="startIcon"></StarRateIcon> 
      </Typography>
          <TextField
            required
            id="Hubands Name "
            name="hubandsName"
            label=" दुलाहको पुरा नाम " 
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
            value={data.hubandsName}
            onChange={inputEvent}
            margin="dense"

          />
        </Grid>
        <Grid item xs={12} sm={6} className="m-heading-textf">
        <Typography variant="p" gutterBottom className="m-heading-textf">
        दुलहिको पुरा नाम:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required
            id="wife name"
            name="wifeName"
            label="दुलहिको पुरा नाम"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={data.wifeName}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="p" gutterBottom className="m-heading-textf">
        दुलाहको जन्म मिती :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField 
          required
          id="hdob" 
          name="hdob" 
          label="दुलाहको जन्म मिती" fullWidth
          variant="outlined" 
          value={data.hdob}
          onChange={inputEvent}
          margin="dense"
          />
        </Grid>
     
        <Grid item xs={12} sm={6}>
        <Typography variant="p" gutterBottom className="m-heading-textf">
        दुलहिको जन्म मिती :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required
            id="wdob"
            name="wdob"
            label="दुलहिको जन्म मिती"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            value={data.wdob}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>



        <Grid item xs={12} sm={6}>
        <Typography variant="p" gutterBottom className="m-heading-textf">
        दुलाहको पेसा :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField 
          required
          id="hoccupation" 
          name="hoccupation" 
          label="दुलाहको पेसा" fullWidth
          variant="outlined" 
          value={data.hoccupation}
          onChange={inputEvent}
          margin="dense"
          />
        </Grid>
     
        <Grid item xs={12} sm={6}>
        <Typography variant="p" gutterBottom className="m-heading-textf">
        दुलहिको पेसा:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required
            id="wocuupation"
            name="woccupation"
            label="दुलहिको पेसा"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            value={data.woccupation}
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
      <FooterCom/>
    </React.Fragment>
  );
}



