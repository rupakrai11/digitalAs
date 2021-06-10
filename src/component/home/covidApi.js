import React,{useState, useEffect,useContext} from 'react'
import axios from 'axios';
import { Box } from '@material-ui/core';
import virus from '../../images/covid/virus.png'
import fiver from '../../images/covid/fever.png'
import sad from '../../images/covid/sad.png'
import smile from '../../images/covid/smile.png'
import hospital from '../../images/covid/hospital.png'
import Context from "../../context";







/**
* @author
* @function CovidData
**/
// https://data.askbhunte.com/api/v1/world
const CovidData = (props) => {
  const { textContent } = useContext(Context);

  const [post,setPost]=useState([]);
  useEffect(()=>{

    axios.get('https://corona.askbhunte.com/api/v1/data/nepal').then(function (response)
    {
    // console.log(response);
    setPost(response.data);
    // setLoading(false);
    })

   
.catch(err=>{
  console.log(err);
})
  })


  return(
     <div className="covidWrapper">
         <div className="coronaUpdate">
         <h2 >{textContent.covidUpdate.heading} </h2>
         {/* &nbsp;<span >Nepal</span> */}
         </div>
         <Box>
         <div className="dataWrapper">

           <div className="nepalData">

           <div className="total_tested">
             <img src={virus} alt="covid"></img>
                <span>{post.tested_total}
                <br></br>
                     Total Test</span> 
           </div>
            <div className="tested_positive">
            <img src={fiver} alt="covid"></img>
              {post.tested_positive}
              <br></br>Tested Positive
              </div>
              <div className="tested_nagative">  
            <img src={smile} alt="covid"></img>
            {post.recovered}
            <br></br>
            Total Recovered
            </div>
              <div className="total_death">
              <img src={sad} alt="covid"></img>
              {post.deaths}<br></br>
              Total Death  
              </div>
          </div>
   {/* Nepal data close */}
   <div className="otherdata">
<div className="total_infected">
  <img src={virus}></img>&nbsp;&nbsp;
     <span>{post.tested_total}
     
     &nbsp; | Total Infected</span> 
</div>
<div className="total_hospital">
  <img src={hospital}  alt="covid"></img>
  &nbsp;&nbsp;
     <span>{post.tested_total}
     &nbsp; | Total Hospital</span> 
</div>
<div className="total_isolation">
  <img src={virus} alt="covid"></img>
  &nbsp;&nbsp;
     <span>{post.tested_total}
     &nbsp; | Total Isolation</span> 
</div>
<div className="total_qurientain">
  <img src={virus} alt="covid"></img>
  &nbsp;&nbsp;
     <span>{post.tested_total}
     &nbsp; | Total Quarantined</span> 
</div>
</div>

         </div>
         
       </Box>

<br/>

<br/>

     </div>
  )
 }

export default CovidData

