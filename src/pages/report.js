import React from 'react'
import "../styles/report.scss";
import ReportContnent from '../component/report/reportcontent';
import {TopCom,TopSecondCom,NavbarCom,FooterCom} from '../component/common/commmoncomponent'

/**
* @author
* @function Report
**/






const Report = (props) => {
  return(
    <>
    <TopCom/>
    <TopSecondCom/>
    <NavbarCom/>
    <div className="report-wrapper">
     
      <div className="Report-top">
      <div className="report-hr"></div>&nbsp;&nbsp;
        <h2 className="report-h2">वार्षिक प्रगति <span className="span">प्रतिवेदन</span></h2>
        <div className="report-hr"></div>
      </div>
     
  <ReportContnent/>
  </div>

    <FooterCom/>
      
    </>
   )

 }

export default Report