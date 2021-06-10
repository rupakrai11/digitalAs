import React from 'react'
// import "../styles/programPage.scss";
 import {TopCom,TopSecondCom,NavbarCom,FooterCom} from '../component/common/commmoncomponent'
import ProgramMain from './../component/program/programMain';


/**
* @author
* @function Program
**/

const Program = (props) => {
  return(
  <>
  <TopCom/>
    <TopSecondCom/>
    <NavbarCom/>
    <ProgramMain/>
    <FooterCom/>
</>
   )

 }

export default Program