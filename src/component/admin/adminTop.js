import React,{useEffect,useState} from 'react'


import firebase from '../../utils/firebase';

import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import '../../styles/dashboard.scss'




/**
* @author
* @function DataHere
**/

const AdminTop = (props) => {

const history=useHistory();
let userName=JSON.parse(localStorage.getItem("_user_info"));



const logOutUser = () => {
  firebase.auth().signOut();
  history.push('/');
  localStorage.clear();

 };

  return(

    <div className="admin-top">
    <div    color="primary" style={{display:"inline-block",color:"#fff",padding:"5px"}}>Welcome &nbsp;&nbsp;&nbsp;{userName}
    </div>
    <div>
    &nbsp;&nbsp;&nbsp;<Button
              type="submit"
     
              variant="contained"
              color="primary"
              // className={classes.submit}
              onClick = {logOutUser}
            >
              Sign out
            </Button>
    </div>
   
            </div>

   )

 }

export default AdminTop