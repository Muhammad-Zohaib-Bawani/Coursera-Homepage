
import React from 'react';
import { ArrowRightOutlined } from "@ant-design/icons";
import Carousel from '../carousel.jsx';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tabs from '@mui/material/Tabs';

export default function Section2() {
  const [value, setValue] = React.useState('0'); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const jobs = [
    "Project Manager",
    "Data Analyst",
    "Digital Marketer",
    "IT Support Specialist",
    "Bookkeeper",
    "Cybersecurity",
    "Front-End Developer",
    "UX Designer"
  ];

  return (
    <div className="container pt-5">
      <h2 style={{ display: "inline" }} className='mb-3'>
        Launch a new career in as little as 6 months
      </h2>
      <a href="" className='mx-4' style={{ color: "#0f1114" }}>
        View all roles <ArrowRightOutlined style={{ height: "15px" }} />
      </a>

      <Box sx={{ width: '100%', typography: 'body1' }}   >
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabs">
            <TabList onChange={handleChange} aria-label="job tabs">
              {jobs.map((job, idx) => (
                <Tab key={idx} label={job} value={String(idx)} className='tab_list' />
              ))}
            </TabList>
          </Box>
          <Carousel jobName={jobs[Number(value)]}  />
        </TabContext>
      </Box>





    <Box sx={{ maxWidth: { xs: 320, sm: 440 }, bgcolor: 'background.paper' }} className="tabs-small mt-3">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
       {jobs.map((job, idx) => (
                <Tab key={idx} label={job} value={String(idx)} className='tab_list' />
              ))}
      </Tabs>
    </Box>



    </div>
  );
}






