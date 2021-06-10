import React from 'react'
import BannerCarosuel from './carosuel'
import OnlineRegistration from './onlineRegistration'

/**
* @author
* @function Banner
**/

const Banner = (props) => {
  return(
    <>
    <div className="bannercontainer" >
    <BannerCarosuel/>
    <OnlineRegistration/>
    </div>

    </>
   )

 }

export default Banner