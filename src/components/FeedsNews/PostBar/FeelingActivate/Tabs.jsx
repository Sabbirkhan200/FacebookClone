import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BrunchDining, Cake, DirectionsCar, Headphones, KeyboardBackspace, Mood, MoodBad, Restaurant, SentimentNeutral, SentimentSatisfiedAlt, SentimentVeryDissatisfied, Sick, Visibility } from '@mui/icons-material';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 450,height:500 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Button variant='outlined' > <KeyboardBackspace/></Button>
  
      <Typography sx={{textAlign:'center',fontSize:22,}}>How are you feeling?</Typography>
   
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label=" Feeling" {...a11yProps(0)} />
          <Tab label="Activity" {...a11yProps(1)} />
      
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Stack spacing={5} direction="row">
      <Button variant="" ><Mood/>Happy</Button>
      <Button variant=""><SentimentVeryDissatisfied />sad</Button>
      <Button variant=""><Sick/>Sick</Button>
    </Stack>
    <Stack spacing={5} direction="row" sx={{mt:3}}>
      <Button variant=""><SentimentSatisfiedAlt/>wonderful</Button>
      <Button variant=""><SentimentNeutral/>ashamed</Button>
      <Button variant=""><MoodBad/>emotional</Button>
    </Stack>
    <Stack spacing={5} direction="row" sx={{mt:3}}>
    <Button variant="" ><Mood/>Happy</Button>
      <Button variant=""><SentimentVeryDissatisfied />sad</Button>
      <Button variant=""><Sick/>Sick</Button>
    </Stack>
    <Stack spacing={5} direction="row" sx={{mt:3}}>
    <Button variant=""><SentimentSatisfiedAlt/>wonderful</Button>
      <Button variant=""><SentimentNeutral/>ashamed</Button>
      <Button variant=""><MoodBad/>emotional</Button>
    </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Stack spacing={2} >
      <Button variant="text" ><Cake/>celebriting....</Button>
      <Button variant="text"><Visibility />watching.....</Button>
      <Button variant="text"><Restaurant/>Eating....</Button>
      <Button variant="text" ><BrunchDining/>Drinking....</Button>
      <Button variant="text"><DirectionsCar />traveling.....</Button>
      <Button variant="text"><Headphones/>listening....</Button>
      <Button variant="text" ><Cake/>celebriting....</Button>
      <Button variant="text"><Visibility />watching.....</Button>
      <Button variant="text"><Restaurant/>Eating....</Button>
      <Button variant="text" ><BrunchDining/>Drinking....</Button>
      <Button variant="text"><DirectionsCar />traveling.....</Button>
      <Button variant="text"><Headphones/>listening....</Button>
    </Stack>
      </TabPanel>
     
    </Box>
  );
}