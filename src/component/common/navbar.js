
import React,{useContext} from 'react'
import { AppBar, Tab, Tabs, Typography,Toolbar, 
useTheme,useMediaQuery} from '@material-ui/core'
import { useState } from 'react';
import DrawerCom from './drawerComponent';
import {AiFillHome} from 'react-icons/ai';
import { Link, BrowserRouter } from 'react-router-dom';
import "../../styles/home.scss";
import flag  from "../../images/logo/nepal.gif";
import Context from "../../context";




/**
* @author
* @function 
Navbar
**/

const 
Navbar = props => {
  const { textContent } = useContext(Context);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const theme=useTheme();
  console.log(theme);
  const isMatch=useMediaQuery(theme.breakpoints.down('sm'));

  return(
    <>
    <AppBar position="static" color='primary'>
      <Toolbar>
      <Typography>
        <img src={flag} style={{height:"60px",marginRight:"20px"}}></img>
        {/* <AiFillHome style={HomeStyle}/> */}
      </Typography>
      {isMatch?(<><DrawerCom/></>)
      :(<>
      <Tabs value={selectedTab} onChange={handleChange} >
          <Tab  disableRipple label={textContent.navigation.home} to='/' component={Link}  className="navlink" style={{fontSize:"18px"}} >
          </Tab>
         <Tab disableRipple label={textContent.navigation.introduction} component={Link} to='/introduction'  selectedTab={1} style={{marginLeft:'-16px',fontSize:"18px"}} className="navlink"   > 
         </Tab>
         
          <Tab  label={textContent.navigation.program} selectedTab={2} style={{marginLeft:'-16px',fontSize:"18px"}} to='/program' component={Link} className="navlink">
          </Tab>
          <Tab  disableRipple  label={textContent.navigation.report} style={{marginLeft:'-16px',fontSize:"18px"}} to='/report' component={Link} className="navlink">
          </Tab>
          <Tab  disableRipple label={textContent.navigation.notice} style={{marginLeft:'-16px',fontSize:"18px"}} to='/notice' component={Link} className="navlink" >
          </Tab>
          <Tab  disableRipple label={textContent.navigation.gallery} style={{marginLeft:'-16px',fontSize:"18px"}} to='/gallery' component={Link} className="navlink">
          </Tab>
          <Tab disableRipple  label={textContent.navigation.covid} style={{marginLeft:'-16px',fontSize:"18px"}} to='/covid' component={Link} className="navlink"> 
          </Tab>
        </Tabs>
      </>)}
      </Toolbar>
    </AppBar>

    </>
   )

 }

export default Navbar















