import React from 'react'
import "../../styles/report.scss";

/**
* @author
* @function Report
**/
const message1="वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)";
const message2="वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)";
const message3="वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)";
const message4="वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)";
const message5="वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)";
const message6="वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)";






const ReportContnent = (props) => {
  return(
    <div className="report-wrapper">
     
      <div className="report-content-whole" >
        <div className="report-content">
        <h5>{message1}</h5>
<p>२०७३/५/१७</p>
<div className="pdf-wrapper">
<a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" style={{marginTop:"50px"}}>
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;प्रतिवेदन पुस्तिका हेर्नुहोस्
  
</a>
        
</div>

</div>
<hr></hr>
<div className="report-content">
        <h5>{message2}</h5>
<p>२०७३/५/१७</p>
<div className="pdf-wrapper">
<a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" style={{marginTop:"50px"}}>
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;प्रतिवेदन पुस्तिका हेर्नुहोस्
  
</a>
        
</div>


</div>
<hr></hr>

<div className="report-content">
        <h5>{message3}</h5>
<p>२०७३/५/१७</p>

<div className="pdf-wrapper">
<a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" style={{marginTop:"50px"}}>
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;प्रतिवेदन पुस्तिका हेर्नुहोस्
  
</a>
        
</div>
</div>
<hr></hr>

<div className="report-content">
        <h5>{message4}</h5>
<p>२०७३/५/१७</p>

<div className="pdf-wrapper">
<a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" style={{marginTop:"50px"}}>
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;प्रतिवेदन पुस्तिका हेर्नुहोस्
  
</a>
        
</div>
</div>
<hr></hr>
<div className="report-content">
        <h5>{message5}</h5>
<p>२०७३/५/१७</p>
<div className="pdf-wrapper">
<a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" style={{marginTop:"50px"}}>
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;प्रतिवेदन पुस्तिका हेर्नुहोस्
  
</a>
        
</div>
</div>
<hr></hr>





        </div>

      
    </div>
   )

 }

export default ReportContnent