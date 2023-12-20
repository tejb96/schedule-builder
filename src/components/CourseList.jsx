// src/components/CourseList.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const CourseList = ({ courses }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '16px',
        }}
    >
        {Object.entries(courses).map(([courseCode, course]) => (
            <Box
                key={courseCode}
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    padding: '16px',
                    minWidth: '200px', // Set a minimum width for each course box
                }}
            >
                <Typography variant="h6">{course.title}</Typography>
                <Typography>{`Term: ${course.term}`}</Typography>
                <Typography>{` Course Number: ${course.number}`}</Typography>
                <Typography>{`Day/Time: ${course.meets}`}</Typography>
            </Box>
        ))}
    </Box>
);

export default CourseList;
