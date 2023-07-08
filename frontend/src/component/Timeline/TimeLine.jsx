import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import {Event} from '@mui/icons-material'
import { Typography } from '@mui/material'

function TimeLine({timelines = []}) {
  return (
  <Timeline position="alternate">
        {
            timelines.map((item, index)=>{
               return <TimelineItem key={index}>
                    <TimelineOppositeContent 
                        sx={{m: 'auto'}}
                        align='right'
                        variant='body2'
                        color="text.secondary"
                        >
                        {item?.date || "3/27/22"}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{bgcolor: "secondary.main"}}></TimelineConnector>
                        <TimelineDot color='secondary'><Event></Event></TimelineDot>
                        <TimelineConnector></TimelineConnector>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '.75rem', px: 2}}>
                        <Typography variant='h6'>{item?.title || "Title"}</Typography>
                        <Typography color='text.secondary'>{item?.subTitle || item?.description || "Description"}</Typography>
                    </TimelineContent>
                </TimelineItem>
            })
        }
    </Timeline>
  )
}

export default TimeLine