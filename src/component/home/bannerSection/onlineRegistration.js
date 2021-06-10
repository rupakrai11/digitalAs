import React,{useContext} from 'react'
import { Box } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import Context from "../../../context";
import { Link} from 'react-router-dom';


/**
* @author
* @function OnlineRegistration
**/

// const handleOnClick = useCallback(() => history.push('/sample'), [history]);

const OnlineRegistration = (props) => {
  const { textContent } = useContext(Context);

const history = useHistory();

const handleOnClick = () => history.push('/birthregistration');


  return(
    <>
    <div  id="onlineRegistrationContainer" >
    <Box className="banner-right">
                   <div className="onlineRegistration" >
                  <h2 >{textContent.OnlineRegistration.onlineRegistration}</h2>
                     </div>
                     <div className="register-main">
                     <div className="register1" button onClick={handleOnClick}>
                  <h5>{textContent.OnlineRegistration.birthRegistration} </h5>
                     </div>
                     <div className="register2">
                <h5> <Link to="/deathregistration" exact className="link">{textContent.OnlineRegistration.deathRegistration}</Link> </h5> 
                     </div>
                     <div className="register3">
                <Link to="/marriageregistration" className="link"> <h5>{textContent.OnlineRegistration.marrageRegistration}</h5></Link> 
                     </div>
                     <div className="register3">
                <Link to='/migrationregistration' className="link">
                <h5> {textContent.OnlineRegistration.migrationRegistration}</h5>
              
                
                </Link>  
                     </div>
                     <div className="register3">

                   <Link to='/houseregistration' className="link">  <h5>{textContent.OnlineRegistration.houseRegistration}</h5></Link>
                     </div>
                        </div>
                  
               </Box>

    </div>
    </>
   )

 }

export default OnlineRegistration