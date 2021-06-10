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
import '../../../styles/migrationRegistrationForm.scss'
/**
* @author
* @function DataHere
**/

const MigrationData = (props) => {
const[registerData,setRegisterData]=useState([]);
const[isLoading,setIsLoading]=useState(true);
const[userName,setUserName]=useState('');
const history=useHistory();


useEffect(()=>{
    setTimeout(function()
    {
        getData()
    },500);;
    },[true])
    
        function  getData() {
            // let playersData=[];
            const db = firebase.firestore();
             return db.collection('migrationregistration').onSnapshot((snapshot) => {
                 console.log(snapshot)
               snapshot.forEach(function (value) {
                registerData.push(value.data())

                   
               });
               setUserName(JSON.parse(localStorage.getItem('_user_info')))
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

<TableContainer component={Paper}>
      <Table  aria-label="simple table" >
        <TableHead className="thead">
          <TableRow>
           {/* <TableCell align="right"colSpan={6}>SN</TableCell>  */}
            <TableCell align="right"  className="t-cell">बसाइ सरेको मिती</TableCell>
            <TableCell align="right" className="t-cell">अ.प्रदेश</TableCell>
            <TableCell align="right" className="t-cell">अ.जिल्ला</TableCell>
            <TableCell align="right" className="t-cell">अ.नगरपालिका</TableCell>
            <TableCell align="right" className="t-cell">अ.वार्ड.न</TableCell>
            <TableCell align="right" className="t-cell">गाउँ/टोल</TableCell>
            <TableCell align="right" className="t-cell">बसाइसरेको.प्रदेश</TableCell>
            <TableCell align="right" className="t-cell">बसाइसरेको.जिल्ला</TableCell>
           <TableCell align="right" className="t-cell">बसाइसरेको.नगरपालिका</TableCell>
            {/* <TableCell align="right" className="t-cell">बसाइसरेको.वार्ड.न</TableCell>
            <TableCell align="right" className="t-cell">बसाइसरेको.गाउँ/टोल</TableCell> */}
            <TableCell align="right" className="t-cell">Status</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>

        {registerData.map((data,index)=>
                <TableRow key={index}>
                {/* <TableCell component="th" scope="row">
                  {data.user_name}
                </TableCell> */}
                <TableCell align="right">{data.nepalidate}</TableCell>
                <TableCell align="right">{data.province}</TableCell>
                <TableCell align="right">{data.district}</TableCell>
                <TableCell align="right">{data.muncipalti}</TableCell>
                <TableCell align="right">{data.wardnumber}</TableCell>
                <TableCell align="right">{data.localaddress}</TableCell>
                <TableCell align="right">{data.mprovince}</TableCell>
                <TableCell align="right">{data.mdistrict}</TableCell>
                 <TableCell align="right">{data.mmunicipalty}</TableCell>
                {/* <TableCell align="right">{data.mwardnumber}</TableCell>
                <TableCell align="right">{data. mlocaladdress}</TableCell> */}
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

export default MigrationData