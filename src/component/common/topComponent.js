import React from 'react'
import Container from '@material-ui/core/Container';
import  '../../styles/home.scss';
import Box from '@material-ui/core/Box';
import theme from '../../utils/theme';
import LanguageToggler from './languageToggler';

/**
* @author
* @function Top
**/

const Top = (props) => {
  return(
    <div>
      <div className="top">
        <Box display="flex">
               <Box className="social-links" flexGrow="1">
                 <ul>
                   <li>

                    <div className="circle">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                      </div> 
                     </li>
                   <li>
                     <div className="circle">
                     <i className="fa fa-instagram" aria-hidden="true"></i>
                     </div>
                     </li>
                   <li>
                     <div className="circle">
                       <i className="fa fa-twitter-square" aria-hidden="true"></i>
                       </div>
                       </li>
                   <li>
                     <div className="circle">
                     <i className="fa fa-youtube-play" aria-hidden="true"></i>
                     </div>
                     </li>
                 </ul>
               </Box>
               <Box className="top-right" >
                 <ul>
                   <li>
                   <div className="circle">
                     <i className="fa fa-phone-square" aria-hidden="true"></i>
                     </div>
                     &nbsp;&nbsp;01-5522563 </li>
                   <li>
                   <div className="circle">
                     
                     <i className="fa fa-envelope" aria-hidden="true"></i>
                     </div>&nbsp; &nbsp;info@lmc.gov.np </li>
                   <li>
                     <div className="languageT">
                    <LanguageToggler/> 

                     </div>

                   {/* EG | NE &nbsp; <div className="circle">
                     <i className="fa fa-angle-down" aria-hidden="true"></i>
                     </div> */}
                    </li>
                 </ul>
               </Box>
        </Box>

            </div>
    </div>
   )
  }


export default Top