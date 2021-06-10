import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BirthRegisterData from './../../component/BirthRegistrationForm/birthRegistrationData';
import MarriageData from '../../component/admin/marriageRegistration/marriageData';
import MigrationData from './../../component/admin/migration/migrationData';
import DeathData from './../../component/admin/DeathRegistration/deathdata';
import AdminTop from '../../component/admin/adminTop';
import '../../styles/dashboard.scss';
import { Copyright, CopyrightOutlined } from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#0d708f",
    color:"#fff",
    display: 'flex',
    height: "1000px"
    },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className="dashboard-wrapper">

    <AdminTop/>
    <hr/>
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        color="primary"
      >
        <Tab label="Birth Register Data" {...a11yProps(0)} />
        <Tab label="Marriage Register Data" {...a11yProps(1)} />
        <Tab label="Migration Register Data" {...a11yProps(2)} />
        <Tab label="Death Register Data" {...a11yProps(3)} />
        {/* <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
       <BirthRegisterData/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MarriageData/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MigrationData/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DeathData/>
      </TabPanel>
     
    </div>
    </div>

    </>
  );
}
