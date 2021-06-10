import React from 'react'
import '../../styles/notice.scss'

/**
* @author
* @function Notice
**/

const message1="टिपिडि तथा पुनर्ताजतगी तालिम सम्वन्धी सुचना ।";
const message2="ललितपुर महानगरपालिकाकाे सुचना ।";
const message3="साधारण सभाको प्रतिवेदन पेश गर्ने सहकारी संस्थाहरुको दोश्रो नामावली प्रकाशन";
const message4="परिक्षा कार्यक्रम स्थगित गरिएको सम्बन्धी सुचना ।";
const message5="रेश विज्ञप्ति";
// const message6="IT Officer काे स‌क्षिप्त सुचि प्रकासन सम्बन्धी सुचना";


const NoticeMain = (props) => {
  return(
    <div className="notice-wrapper">
    <div className="notice-top">
    <div className="notice-hr"></div>&nbsp;&nbsp;
      <h2 className="notice-h2">सुचना तथा  <span className="span">जानकारी</span></h2>
      <div className="notice-hr"></div>
    </div>
    <div className="notice-content-whole" >
      <div className="notice-content">
      <h5>{message1}</h5>
<p>२०७३/५/१७</p>
</div>
<hr></hr>
<div className="notice-content">
      <h5>{message2}</h5>
<p>२०७३/५/१७</p>
</div>
<hr></hr>

<div className="notice-content">
      <h5>{message3}</h5>
<p>२०७३/५/१७</p>
</div>
<hr></hr>

<div className="notice-content">
      <h5>{message4}</h5>
<p>२०७३/५/१७</p>
</div>
<hr></hr>
<div className="notice-content">
      <h5>{message5}</h5>
<p>२०७३/५/१७</p>
</div>
<hr></hr>
      </div>

    
  </div>
   )

 }

export default NoticeMain