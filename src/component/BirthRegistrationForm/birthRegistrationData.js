import React,{useEffect,useState} from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from '../../utils/firebase';

import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';




/**
* @author
* @function DataHere
**/

const BirthRegisterData = (props) => {
const[registerData,setRegisterData]=useState([]);
const[isLoading,setIsLoading]=useState(true);
const[userName,setUserName]=useState('');
const history=useHistory();

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

useEffect(()=>{
    setTimeout(function()
    {
        getData()
    },500);;
    },[true])
    
        function  getData() {
            
            const db = firebase.firestore();
             return db.collection('birthregistration').onSnapshot((snapshot) => {
                 console.log(snapshot)

               snapshot.forEach(function (value) {
                console.log(value.data());
                registerData.push(value.data())

                   
               });
               setUserName(JSON.parse(localStorage.getItem('_user_info')))
                 setRegisterData(registerData);
                 setIsLoading(false);
            });
    
        }


//  const getauth = firebase.getAuth();
// const signOut=firebase.signOut();

// const auth = auth.firebase();
const logOutUser = () => {
  firebase.auth().signOut();
  history.push('/');
  localStorage.clear();

 };

  return(
    <div style={{width:"100%"}}>
    <div style={{padding:"20px",margin:'auto',color:'#000'}}>
            {isLoading?<div>please wait data is loading</div>:
<div> 

<TableContainer component={Paper} style={{marginTop:"-50px"}}>
      <Table  aria-label="simple table">
        <TableHead className="BirthData-Top">
          <TableRow>
            <TableCell align="right" className="t-cell">First Name</TableCell>
            <TableCell align="right"className="t-cell">Last Name</TableCell>
            <TableCell align="right"className="t-cell">Father'Name</TableCell>
            <TableCell align="right"className="t-cell">Mother Name</TableCell>
            <TableCell align="right"className="t-cell">Date Of Birth</TableCell>
            <TableCell align="right"className="t-cell">Ward Number</TableCell>
            <TableCell align="right"className="t-cell">Religion</TableCell>
            <TableCell align="right"className="t-cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {registerData.map((data,index)=>
                <TableRow key={index}>
                {/* <TableCell component="th" scope="row">
                  {data.user_name}
                </TableCell> */}
                <TableCell align="right">{data.firstName}</TableCell>
                <TableCell align="right">{data.lastName}</TableCell>
                <TableCell align="right">{data.fatherName}</TableCell>
                <TableCell align="right">{data.motherName}</TableCell>
                <TableCell align="right">{data.dob}</TableCell>
                <TableCell align="right">{data.wardNumber}</TableCell>
                <TableCell align="right">{data.religion}</TableCell>
                <TableCell align="right">{data.status}</TableCell>
                </TableRow>
           
            )}
          
        </TableBody>
      </Table>
    </TableContainer>
      <div>
    
      </div>
           
            </div>
}
</div>

    </div>
   )

 }

export default BirthRegisterData