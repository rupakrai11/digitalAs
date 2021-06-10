import { Box } from '@material-ui/core'
import React,{useContext} from 'react'
import '../../styles/home.scss'
import logo from '../../images/logo/new_logo.png';
import Context from "../../context";

/**
* @author
* @function TopSecond
**/
const TopSecond = (props) => 
{

const { textContent } = useContext(Context);
  return(
    <>
    <div className="logo-section">
        <Box style={{textAlign:'center'}}>
        <img src={logo} alt="logo" height="100px"  ></img>
        </Box>
        <Box className="name" > 
        <h2 style={{textTransform:"capitalize"}}>{textContent.name.name}</h2>
        {/* <p>बागमती प्रदेश, पुल्चोक, ललितपुर</p> */}
        </Box>
    </div>
    </>
   )

 }

export default TopSecond