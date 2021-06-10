import React, { Component } from 'react';
import { FooterCom, TopCom, TopSecondCom } from '../component/common/commmoncomponent';
import GalleryContent from '../component/gallery/gallery-content';
import { NavbarCom } from './../component/common/commmoncomponent';


 const Gallery=(props)=> {

    return (
<>
      <TopCom/>
      <TopSecondCom/>
      <NavbarCom/>
   <GalleryContent/>
      <FooterCom/>
        </>

    );
}
export default Gallery