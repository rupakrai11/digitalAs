import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
// import '../../styles/birthregistration.scss';
import StarRateIcon  from '@material-ui/icons/StarRate';
import firebase from '../../../utils/firebase'
import { SentimentVeryDissatisfiedSharp } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
 import '../../../styles/migrationRegistrationForm.scss'
import { FooterCom, NavbarCom } from '../../common/commmoncomponent';


export default function MigrationRegistrationForm() {
  const firestore = firebase.firestore();
  const history = useHistory();
  const[error,setError]=useState('');

  // const[firstName,setFirstname]=useState();
  const[data,setData]=useState({
    nepalidate:'',
    engdate:'',
    province:'',
    district:'',
    muncipalti:'',
    wardnumber:'',
    localaddress:'',
    houseNumber:'',
    mprovince:'',
    mdistrict:'',
    mmunicipalty:'',
    mwardnumber:'',
    mlocaladdress:'',
    mhouseNumber:'',
    firstName1:'',
    birthRnum1:'',
    dob1:'',
    Relation1:'',
    firstName2:'',
    birthRnum2:'',
    dob2:'',
    relation2:''

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

  const MigrationRegister=(e)=>{
    e.preventDefault();

    if(data.nepalidate==''||data.engdate==''
    ||data.province==''||data.district==''||data.muncipalti==''||
    data.wardnumber==''||data.localaddress==''||data.houseNumber==''||
    data.mprovince==''||data.mdistrict==''||data.mmunicipalty==''||
    data.mwardnumber==''||data.mlocaladdress==''||data.mhouseNumber==''||
    data.firstName1==''||data.birthRnum1=='' ||data.dob1==''||data.Relation1==''||data.firstName2==''||
    data.birthRnum2==''||data.dob2==''||data.relation2==''){

  setError("कृपया पुरा डाटा भर्नुहोस्");

    }else{
      firestore.collection("migrationregistration").add({
        nepalidate:    data.nepalidate,
        engdate:       data.engdate,
        province:      data.province,
        district:      data.district,
        muncipalti:    data.muncipalti,
        wardnumber:    data.wardnumber,
        localaddress:  data.localaddress,
        houseNumber:   data.houseNumber,
        mprovince:     data.mprovince,
        mdistrict:     data.mdistrict,
        mmunicipalty:  data.mmunicipalty,
        mwardnumber:   data.mwardnumber,
        mlocaladdress: data.mlocaladdress,
        mhouseNumber:  data.mhouseNumber,
        firstName1:    data.firstName1,
        birthRnum1:    data.birthRnum1,
        dob1:          data.dob1,
        Relation1:     data.Relation1,
        firstName2:    data.firstName2,
        birthRnum2:    data.birthRnum2,
        dob2:          data.dob2,
        relation2:     data.relation2,
        status:        "pending",
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
        <Typography variant="h4" gutterBottom className="m-head-textf" >
            बसाइसराइ दर्ता गेर्नुहोस्
          </Typography>
            </Grid>


          <Grid   xs={12} sm={12} className="m-head-top">
              २.बसाइ सरेको मिती 
          </Grid>  
      <Grid item xs={12} sm={6}>
            <Typography variant="p"
              gutterBottom 
            className="m-head-textf">
        बि.स (बर्ष-महिना-गते) :<StarRateIcon  id="startIcon"></StarRateIcon> 
      </Typography>
          <TextField
            required
            id="nepalidate"
            name="nepalidate"
            label="2070-12-10" 
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
            onChange={inputEvent}
            margin="dense"
            value={data.nepalidate}
            onChange={inputEvent}
            type="date"
            InputLabelProps={{
                shrink: true,
              }}
              margin="dense"

          />
        </Grid>
        <Grid item xs={12} sm={6} className="m-head-textf">
        <Typography variant="p" gutterBottom className="m-head-textf">
        ई स(YY-MM-DD):<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required
            id="engdate"
            name="engdate"
            label="1999-3-24"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={data.engdate}
            onChange={inputEvent}
            margin="dense"
            onChange={inputEvent}
            type="date"
            InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
          />
        </Grid>
            <Grid  xs={12} sm={12} className="mi-head-top" >
            १.आस्थाइ ठेगाना 
        </Grid>
        <Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf" >
        प्रदेश :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
      <TextField
            required
            id="province"
            name="province"
            label="province"
            fullWidth
            autoComplete="off"
            variant="outlined"
            value={data.province}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf">
        जिल्ला:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required
            id="discrict"
            name="district"
            label="गा.बी.स:\न.पा"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={data.district}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>

      <Grid item xs={12} sm={4}>
        <Typography variant="p"  gutterBottom className="m-head-textf">
        गाउँ पालिका/नगरपालिका:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required id="muncipalti"
             name="muncipalti" 
             fullWidth autoComplete="shipping postal-code"
            variant="outlined"
            label="गाउँ पालिका/नगरपालिका"
            value={data.muncipalti}
            onChange={inputEvent}
            margin="dense"
          />
      </Grid>
  <Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf">
        वडा नम्बर:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
              required
            id="wardnumber"
            name="wardnumber"
            label="wardnumber"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            value={data.wardnumber}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>

          <Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf" >
        गाउँ टोल :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
      <TextField
            required
            id="firstName"
            name="localaddress"
            label="गाउँ टोल"
            fullWidth
            autoComplete="off"
            variant="outlined"
            value={data.localaddress}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid> 

        <Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf">
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
<Grid   xs={12} sm={12} className="m-head-top">
२.बसाइ सरेको ठेगाना 
</Grid>
       
<Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf" >
        प्रदेश :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
      <TextField
            required
            id="firstName"
            name="mprovince"
            label="Province"
            fullWidth
            autoComplete="off"
            variant="outlined"
            value={data.mprovince}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf">
        जिल्ला:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required
            id="lastName"
            name="mdistrict"
            label="जिल्ला"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={data.mdistrict}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>

    <Grid item xs={12} sm={4}>
        <Typography variant="p"  gutterBottom className="m-head-textf">
        गाउँ पालिका/नगरपालिका:<StarRateIcon  id="startIcon"></StarRateIcon>
       </Typography>
          <TextField
            required id="mmunicipalty"
             name="mmunicipalty" 
             fullWidth autoComplete="shipping postal-code"
            variant="outlined"
            label="गाउँ पालिका/नगरपालिका"
            value={data.mmunicipalty}
            onChange={inputEvent}
              margin="dense"
          />
      </Grid>

  <Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf">
        वडा नम्बर:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
              required
            id="mwardnumber"
            name="mwardnumber"
            label="वडा नम्बर"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            value={data.mwardnumber}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>
          <Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf" >
        गाउँ टोल :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
      <TextField
            required
            id="mlocaladdress"
            name="mlocaladdress"
            label="गाउँ टोल"
            fullWidth
            autoComplete="off"
            variant="outlined"
            value={data.mlocaladdress}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid> 
        <Grid item xs={12} sm={4}>
        <Typography variant="p" gutterBottom className="m-head-textf">
        घर न:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required
            id="House Number"
            name="mhouseNumber"
            label="घर न"
            fullWidth
            autoComplete="shipping address-line1"
            variant="outlined"
            value={data.mhouseNumber}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>
        <Grid   xs={12} sm={12} className="m-head-top">
    ३.पारिवारिक सदस्यहरु बिवरण
</Grid>



<Grid item xs={12} sm={3}>
        <Typography variant="p" gutterBottom className="m-head-textf" >
        पुरा नाम :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
      <TextField
            required
            id="firstName"
            name="firstName1"
            label="पुरा नाम"
            fullWidth
            autoComplete="off"
            variant="outlined"
            value={data.firstName1}
            onChange={inputEvent}
            margin="dense"
          />
        
        </Grid>





        <Grid item xs={12} sm={3}>

        <Typography variant="p" gutterBottom className="m-head-textf">
        जन्म  दर्ता नम्बर:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
       
          <TextField
            required
            id="birthRnum1"
            name="birthRnum1"
            label="जन्म  दर्ता नम्बर"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={data.birthRnum1}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>






            <Grid item xs={12} sm={3}>
        <Typography variant="p"  gutterBottom className="m-head-textf">
        जन्म मिती:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required id="dob1"
             name="dob1" 
             fullWidth autoComplete="shipping postal-code"
            variant="outlined"
            label="जन्म मिती"
            value={data.dob1}
            onChange={inputEvent}
         
              margin="dense"
          />
</Grid>


  <Grid item xs={12} sm={3}>
        <Typography variant="p" gutterBottom className="m-head-textf">
        जानकारीकर्ता सँगको सम्बध :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
              required
            id="Relation1"
            name="Relation1"
            label="जानकारीकर्ता सँगको सम्बध"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            value={data.Relation1}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>


        <Grid item xs={12} sm={3}>
        <Typography variant="p" gutterBottom className="m-head-textf" >
        पुरा नाम :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
      <TextField
            required
            id="firstName2"
            name="firstName2"
            label="पुरा नाम"
            fullWidth
            autoComplete="off"
            variant="outlined"
            value={data.firstName2}
            onChange={inputEvent}
            margin="dense"
          />
        
        </Grid>


        <Grid item xs={12} sm={3}>

        <Typography variant="p" gutterBottom className="m-head-textf">
        जन्म  दर्ता नम्बर:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
       
          <TextField
            required
            id="birthRnum2"
            name="birthRnum2"
            label="जन्म दर्ता नम्बर"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={data.birthRnum2}
            onChange={inputEvent}
            margin="dense"
          />
        </Grid>

            <Grid item xs={12} sm={3}>
        <Typography variant="p"  gutterBottom className="m-head-textf">
        जन्म मिती:<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
            required id="dob2"
             name="dob2" 
             fullWidth autoComplete="shipping postal-code"
            variant="outlined"
            label="जन्म मिती"
            value={data.dob2}
            onChange={inputEvent}
            margin="dense"

          
          />
</Grid>


  <Grid item xs={12} sm={3}>
        <Typography variant="p" gutterBottom className="m-head-textf">
        जानकारीकर्ता सँगको सम्बध :<StarRateIcon  id="startIcon"></StarRateIcon>
      </Typography>
          <TextField
              required
            id="relation2"
            name="relation2"
            label="जानकारीकर्ता सँगको सम्बध"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
            value={data.relation2}
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
                    onClick={MigrationRegister}
                 
                    // className={classes.button}start
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



