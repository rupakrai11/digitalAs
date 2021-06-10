import React from 'react'
import IntroductionMain from '../component/introduction/introductionMain';
import {TopCom,TopSecondCom,FooterCom} from '../component/common/commmoncomponent'
import Navbar from './../component/common/navbar';

/**
* @author
* @function Introduction
**/

const Introduction = (props) => {
  return(
    <>
      <TopCom/>
    <TopSecondCom/>
    <Navbar/>
    <IntroductionMain/>
    <FooterCom/>
    </>
    

   )

 }

export default Introduction