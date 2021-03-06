import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { LayoutImages } from '../images'
import ForecastTable from '../DataView/forecast/forecast'

const useStyles = makeStyles(theme => ({
    Tabs:{
        position:'absolute',
        top:'15%',
        padding:'0% 5%'

    }
  }));


const TableTabs = ( ) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    return(
        <>
           
            <Tabs value={value} onChange={handleChange} className={classes.Tabs} aria-label="simple tabs example">
                <Tab label="Forecast" {...a11yProps(0)} />
                <Tab label="Summary" {...a11yProps(1)} />
                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            <TabPanel  value={value} index={0}>
                <ForecastTable />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Summary
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>  */}
        </>
    )
}
export default TableTabs


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }