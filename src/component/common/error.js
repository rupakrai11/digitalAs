import React from 'react'
import { Typography } from '@material-ui/core';
import { FooterCom, NavbarCom, TopCom, TopSecondCom } from './commmoncomponent';

/**
* @author
* @function Error
**/

const Error = (props) => {
  return(
      <>
    <TopCom/>
    <TopSecondCom/>
    <NavbarCom/>
    <div style={{padding:"100px",heignt:"1000px",textAlign:"center"}}>
        <Typography>
            <h2>Oops Error Occured No Page Found!!!</h2>
             </Typography>

    </div>
        <FooterCom/>
        </>
   )

 }

export default Error