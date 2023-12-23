import React, { useState } from 'react';
import SelectTerm from './SelectTerm';
import { Box, Typography } from '@mui/material';

const CourseList = ({ courses }) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');

    const handleSelectTerm = (newTerm) => {
        setSelectedTerm(newTerm);
    };

    const filteredCourses = Object.keys(courses)
        .filter((courseKey) => courses[courseKey].term.includes(selectedTerm))
        .map((courseKey) => (
            <Box
                key={courseKey}
                sx={{
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    padding: '16px',
                    minWidth: '200px',
                }}
            >
                <Typography variant="h6">{courses[courseKey].title}</Typography>
                <Typography>{`Term: ${courses[courseKey].term}`}</Typography>
                <Typography>{`Course Number: ${courses[courseKey].number}`}</Typography>
                <Typography>{`Day/Time: ${courses[courseKey].meets}`}</Typography>
            </Box>
        ));

    return (
        <div>
            <SelectTerm onSelectTerm={handleSelectTerm} selectedTerm={selectedTerm} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}
            >
                {filteredCourses}
            </Box>
        </div>
    );
};

export default CourseList;
