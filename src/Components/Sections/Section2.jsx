import React from 'react';
import { Anchor } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";
import Card from '../Card.jsx'
import Box from '@mui/joy/Box';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';


// const Section2 = () => (
//   <>
// <

//   <div style={{ padding: '20px' }}>
//       <Anchor
//         direction="horizontal"
//         style={{position:"relative"}}
//         items={[
//           {
//             key: 'part-1',
//             href: '',
//             title: 'Project Manager',
//           },
//           {
//             key: 'part-2',
//             href: '',
//             title: 'Data Analyst',
//           },
//           {
//             key: 'part-3',
//             href: '',
//             title: 'Digital Marketer',
//           },
//           {
//             key: 'part-3',
//             href: '',
//             title: '  IT Support Specialist',
//           },
//           {
//             key: 'part-3',
//             href: '',
//             title: 'Bookkeeper',
//           },
//           {
//             key: 'part-3',
//             href: '',
//             title: 'Cybersecurity',
//           },
//           {
//             key: 'part-3',
//             href: '',
//             title: 'Front-End Developer',
//           },
//           {
//             key: 'part-3',
//             href: '',
//             title: 'UX Designer',
//           },
//         ]}
//       />
//     </div>
// </div>

















   
  
//   </>
// );

// export default Section2;



























export default function Section2() {
  const [index, setIndex] = React.useState(0);
  return (

    <>
    <div className="container pt-5">
  <h2 style={{display:"inline"}} className='mb-3'>
 Launch a new career in as little as 6 months
  </h2>
   <a href="" className='mx-4' style={{color:"#0f1114"}}>   View all roles   <ArrowRightOutlined style={{height:"15px"}}/>
  </a>
 
    
  <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }} className="mt-4">
      <Tabs
        aria-label="Plain tabs"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList variant="plain">
          <Tab variant={index === 0 ? 'outlined' : 'plain'}>Project Manager</Tab>
          <Tab variant={index === 1 ? 'outlined' : 'plain'}>Data Analyst</Tab>
          <Tab variant={index === 2 ? 'outlined' : 'plain'}>Digital Marketer</Tab>
          <Tab variant={index === 3? 'outlined' : 'plain'}>IT Support Specialist</Tab>
          <Tab variant={index === 4 ? 'outlined' : 'plain'}>Bookkeeper</Tab>
          <Tab variant={index === 5? 'outlined' : 'plain'}>Cybersecurity</Tab>
          <Tab variant={index === 6 ? 'outlined' : 'plain'}>Front-End Developer</Tab>
          <Tab variant={index === 7 ? 'outlined' : 'plain'}>UX Designer</Tab>
        </TabList>
      </Tabs>

      <Tabs
    
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList variant="outlined" disableUnderline>
          <Tab
            variant={index === 0 ? 'soft' : 'plain'}
            color={index === 0 ? 'success' : 'neutral'}
          >
            First tab
          </Tab>
          <Tab
            variant={index === 1 ? 'soft' : 'plain'}
            color={index === 1 ? 'warning' : 'neutral'}
          >
            Second tab
          </Tab>
          <Tab
            variant={index === 2 ? 'soft' : 'plain'}
            color={index === 2 ? 'danger' : 'neutral'}
          >
            Third tab
          </Tab>
        </TabList>
      </Tabs>

      <Tabs
        aria-label="Soft tabs"
        value={index}
        onChange={(event, value) => setIndex(value)}
      >
        <TabList variant="soft">
          <Tab
            variant={index === 0 ? 'solid' : 'plain'}
            color={index === 0 ? 'primary' : 'neutral'}
          >
            First tab
          </Tab>
          <Tab
            variant={index === 1 ? 'solid' : 'plain'}
            color={index === 1 ? 'primary' : 'neutral'}
          >
            Second tab
          </Tab>
          <Tab
            variant={index === 2 ? 'solid' : 'plain'}
            color={index === 2 ? 'primary' : 'neutral'}
          >
            Third tab
          </Tab>
        </TabList>
      </Tabs>









      <Card />



    </Box>
    </div>
    </>
   
  );
}
