import React,{useEffect,useState} from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from '../../../utils/firebase';

import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import '../../../styles/marriageRegistrationForm.scss'
/**
* @author
* @function DataHere
**/

const MarriageData = (props) => {
const[registerData,setRegisterData]=useState([]);
const[isLoading,setIsLoading]=useState(true);
const history=useHistory();


useEffect(()=>{
    setTimeout(function()
    {
        getData()
    },500);
    },[])
    
        function  getData() {
            // let playersData=[];
            const db = firebase.firestore();
             return db.collection('marriageregistration').onSnapshot((snapshot) => {
                 console.log(snapshot)
               snapshot.forEach(function (value) {
                registerData.push(value.data())
                   
               });
              //  setUserName(JSON.parse(localStorage.getItem('_user_info')))
                 setRegisterData(registerData);
                 setIsLoading(false);
            });
    
        }


const logOutUser = () => {
  firebase.auth().signOut();
  history.push('/');
  localStorage.clear();

 };

  return(
    <div >
    <div style={{padding:"20px",margin:'auto',color:'#000'}}>
            {isLoading?<div>please wait data is loading</div>:
<div > 

<TableContainer component={Paper} style={{marginTop:"-50px"}} >
      <Table  aria-label="simple table" >
        <TableHead  id="marriage-thead" >
          <TableRow>
            <TableCell align="right" className="t-cell" >विवाहको को मिती</TableCell>
            <TableCell align="right" className="t-cell">विवाहको को किसिम</TableCell>
            <TableCell align="right" className="t-cell">जिल्ला</TableCell>
            <TableCell align="right" className="t-cell"> गा.बी.स:\न.पा</TableCell>
            <TableCell align="right" className="t-cell">वडा नम्बर</TableCell>
            <TableCell align="right" className="t-cell">घर न</TableCell>
            <TableCell align="right" className="t-cell">दुलाहको पुरा नाम </TableCell>
            <TableCell align="right" className="t-cell">दुलहिको पुरा नाम </TableCell>
            <TableCell align="right" className="t-cell">दुलाहको जन्म मिती </TableCell>
            <TableCell align="right" className="t-cell">दुलहिको जन्म मिती</TableCell>
            <TableCell align="right" className="t-cell">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>

        {registerData.map((data,index)=>
                <TableRow key={index}>
                {/* <TableCell component="th" scope="row">
                  {data.user_name}
                </TableCell> */}
                <TableCell align="right">{data.marraiagedate}</TableCell>
                <TableCell align="right">{data.marraiagetype}</TableCell>
                <TableCell align="right">{data.district}</TableCell>
                <TableCell align="right">{data.secondD}</TableCell>
                <TableCell align="right">{data.wodanumber}</TableCell>
                <TableCell align="right">{data.houseNumber}</TableCell>
                <TableCell align="right">{data.hubandsName}</TableCell>
                <TableCell align="right">{data.wifeName}</TableCell>
                <TableCell align="right">{data.hdob}</TableCell>
                <TableCell align="right">{data.wdob}</TableCell>
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

export default MarriageData