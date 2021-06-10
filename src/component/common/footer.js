import React from 'react'
import '../../styles/footer.scss';
import logo from '../../images/logo/nepal.gif';
/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div className="footer-main">

    <div className="footer-wrapper">
      <div className="log"><img src={logo} alt="logo" style={{height:"80px"}}>
        </img></div>
        <div className="import-notice">
          <ul>
          <li><h5>सूचनाहरु</h5></li>
          <div className="horizental"></div>
            
            <li>सूचना तथा समाचार</li>
            <li>सार्वजनिक खरीद / बोलपत्र / आशयपत्र सूचना</li>
            <li>ऐन, कानुन तथा निर्देशिका</li>
            <li>कर तथा शुल्कहरु
          </li>
          </ul>
        </div>
        <div className="import-notice">
          <ul>
          <li><h5>कर तथा शुल्क</h5></li>
          <div className="horizental"></div>
            <li>कर, सेवा शुल्क, भाडा, दस्तुर आदिको दर रेट विवरण (आ.व.</li>
            <li>कर तथा शुल्कहरु</li>
            <li>वार्षिक प्रगति प्रतिवेदन
              </li>
            <li>चौमासिक प्रगति प्रतिवेदन </li>

          </ul>
        </div>


        <div className="import-notice">
          <ul>
          <li><h5>सम्पर्क विवरण</h5></li>
          <div className="horizental"></div>
            
            <li>ललितपुर महानगरपालिका, पुल्चोक, ललितपुर ।</li>
            <li>Public Procurement/ Tender Notices</li>
            <li>फोन: +९७७ ०१ ५५२२५६३  इमेल: info@lmc.gov.np
          </li>
            <li> Tax and Fees </li>
          </ul>
        </div>
        </div>

        <div className="copy-right">© 2021  ललितपुर महानगरपालिका</div>
        </div>
  

   )

 }

export default Footer