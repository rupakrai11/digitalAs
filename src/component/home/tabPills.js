import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Tabpills() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}
     >

        <div className="tab-container">
        <div className="tabpanel" >
        <h2>जानकारी</h2>
        <AppBar position="static" color="primary" className="appbar" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="बजेट" {...a11yProps(0)} />
          <Tab label="
योजना" {...a11yProps(1)} />
          <Tab label="खरिद" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

        <div className="item-first-wrapper">
        <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ. व. २०७७/७८ को बजेट पुस्तिका
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; बजेट पुस्तिका हेर्नुहोस्

  
</a>

</div>

       </div>
  
       </div>
       <hr></hr>

       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ.व. २०७३।७४ का लागि भौतिक पूर्वाधार अन्तर्गतका लक्षित योजनाहरु
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;प्रतिवेदन पुस्तिका हेर्नुहोस्
  
</a>
</div>

       </div>
       </div>
       <hr></hr>


       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ. व. २०७६/७७ को बजेट पुस्तिका
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; बजेट पुस्तिका हेर्नुहोस्
  
</a>
</div>
       </div>
       </div>
       <hr></hr>

       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       वार्षिक नगर विकास योजना २०७५/०७६
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; योजना पुस्तिका हेर्नुहोस्
  
</a>
</div>
       </div>
       </div>
       <hr></hr>

       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ. व. २०७५/७६ को बजेट पुस्तिका
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;प्रतिवेदन पुस्तिका हेर्नुहोस्
  
</a>
</div>
       </div>
       </div>
       <hr></hr>

   




       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ.व. २०७२।७३ का लागि लक्षित कार्यक्रमहरु
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;कार्यक्रम पुस्तिका हेर्नुहोस्
  
</a>
</div>

       </div>
       </div>
       <hr></hr>
       </div>

     
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      <div className="item-first-wrapper">
        <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       वार्षिक नगर विकास योजना २०७५/०७६
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; विकास योजना पुस्तिका हेर्नुहोस्
  
</a>
</div>
       </div>
       </div>
       <hr></hr>


       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ.व. २०७३।७४ का लागि भौतिक पूर्वाधार अन्तर्गतका लक्षित योजनाहरु
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;प्योजना पुस्तिका हेर्नुहोस्
  
</a>
</div>
       </div>
       </div>
       <hr></hr>
       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ. व. २०७५/७६ को बजेट पुस्तिका
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; बजेट पुस्तिका हेर्नुहोस्
  
</a>
</div>
       </div>
       </div>
       <hr></hr>

       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       वार्षिक नगर विकास योजना २०७५/०७६
       <div className="pdf-wrapper-tab">
       <a href={process.env.PUBLIC_URL +'/BIM.pdf'} without rel="noopener noreferrer" target="_blank" >
<i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; योजना पुस्तिका हेर्नुहोस्
  
</a>
</div>
       </div>
       </div>
       <hr></hr>


       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ.व. २०७३।७४ का लागि भौतिक पूर्वाधार अन्तर्गतका लक्षित योजनाहरु

       </div>
       </div>
       <hr></hr>

       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ.व. २०७२।७३ का लागि लक्षित कार्यक्रमहरु

       </div>
       </div>
       <hr></hr>
       </div>

        
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="item-first-wrapper">
        <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       Invitation for Bids for the road maintenance
       </div>
       </div>
       <hr></hr>


       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ. व. २०७६/७७ को बजेट पुस्तिका
       </div>
       </div>
       <hr></hr>
       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ. व. २०७५/७६ को बजेट पुस्तिका
       </div>
       </div>
       <hr></hr>

       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       वार्षिक नगर विकास योजना २०७५/०७६
       </div>
       </div>
       <hr></hr>


       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ.व. २०७३।७४ का लागि भौतिक पूर्वाधार अन्तर्गतका लक्षित योजनाहरु

       </div>
       </div>
       <hr></hr>

       <div className="item-first">
        <div className="triangle-right">
        </div>
       <div className="content">
       आ.व. २०७२।७३ का लागि लक्षित कार्यक्रमहरु

       </div>
       </div>
       <hr></hr>
       </div>

      </TabPanel>
        </div>
     
<div className="services">
    <h2>हाम्रा सेवाहरु</h2>
<div className="service-hr"></div>
    <div className="service-content">
      <ul>
      <li style={{display:'flex',marginTop:"10px"}}>  <div id="pointer">
    </div> <span style={{margin:"10px 0px 0px 30px"}}> 
    घर निर्माद्व तथा अन्य निर्माद्व कार्य सम्भन्धी </span></li>

    <li style={{display:'flex',marginTop:"30px"}}>  <div id="pointer">
    </div> <span style={{margin:"10px 0px 0px 30px"}}> 
    कोरोना वाइरस सम्भन्धी  लक्षित कार्यक्रमहरु </span></li>

    <li style={{display:'flex',marginTop:"30px"}}>  <div id="pointer">
    </div> <span style={{margin:"10px 0px 0px 30px"}}> 
    
वार्षिक नगर विकास योजना २०७५/०७६ </span></li>

      
    <li style={{display:'flex',marginTop:"30px"}}>  <div id="pointer">
    </div> <span style={{margin:"10px 0px 0px 30px"}}> 
    आ.व. २०७२।७३ का लागि लक्षित कार्यक्रमहरु </span></li>

    <li style={{display:'flex',marginTop:"30px"}}>  <div id="pointer">
    </div> <span style={{margin:"10px 0px 0px 30px"}}> 
    घर निर्माद्व तथा अन्य निर्माद्व कार्य सम्भन्धी </span></li>

    
    <li style={{display:'flex',marginTop:"30px"}}>  <div id="pointer">
    </div> <span style={{margin:"10px 0px 0px 30px"}}> 
    कोरोना वाइरस सम्भन्धी  लक्षित कार्यक्रमहरु </span></li>


    <li style={{display:'flex',marginTop:"30px"}}>  <div id="pointer">
    </div> <span style={{margin:"10px 0px 0px 30px"}}> 
    घर निर्माद्व तथा अन्य निर्माद्व कार्य सम्भन्धी </span></li>


      </ul>
    </div>
</div>
</div>
</div>
  );
}