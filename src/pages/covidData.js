import React from 'react'
import { FooterCom, NavbarCom, TopCom, TopSecondCom } from '../component/common/commmoncomponent';
import CovidData from './../component/home/covidApi';

/**
* @author
* @function Covid
**/

const Covid = (props) => {
  return(
    <div>
       <TopCom/>
      <TopSecondCom/>
      <NavbarCom/>
      <CovidData/>
      <FooterCom/>
      </div>
   )

 }

export default Covid