import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function CustomTimeline({timeLineData}) {
    const length = timeLineData.length
  return (
   <div className='timeLine_custom' style={{ textAlign: 'left' }}>
     <Timeline position="alternate-reverse" style={{ marginLeft: 0, paddingLeft: 0 }}>
     {timeLineData.map((exp, index) => (
        <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{backgroundColor: "#4CE6A6"}} />
          {index !== timeLineData.length-1 && <TimelineConnector />}
          
        </TimelineSeparator>
        <TimelineContent>{exp.role}<br /> <span className='company_timeline'>{exp.place} - {exp.location} [{exp.duration}]</span></TimelineContent>
        
      </TimelineItem>
      ))}
      
      
    </Timeline>
   </div>
  );
}