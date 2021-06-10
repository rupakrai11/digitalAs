import React, { Component } from 'react'
import TopSecond from '../component/common/topSecond';
import Top from '../component/common/topComponent';
import Navbar from '../component/common/navbar.js';
import Banner from '../component/home/bannerSection/banner';
import CovidData from '../component/home/covidApi';
import Tabpills from '../component/home/tabPills';
import OurProgram from '../component/home/ourProgram/ourProgram';
import Footer from '../component/common/footer';
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <>
     <Top/>
    <TopSecond/>
    <Navbar/>
    <Banner/>
    <CovidData/>
    <Tabpills/>
    <OurProgram/>
    <Footer/>


    </>
   )
  }


export default Home