import React, { useState } from 'react';
import SelectTerm from './SelectTerm';
import { Box, Typography } from '@mui/material';

const CourseList = ({ courses }) => {
    const terms = ['Fall', 'Spring', 'Winter'];
    const [selectedTerm, setSelectedTerm] = useState(terms);

    const filteredCourses = Object.keys(courses)
        .filter((courseKey) => selectedTerm.includes(courses[courseKey].term))
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
            <SelectTerm onSelectTerm={setSelectedTerm} selectedTerm={selectedTerm} terms={terms} />
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
