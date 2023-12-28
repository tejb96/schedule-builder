import React, { useState } from 'react';
import SelectTerm from './SelectTerm';
import {ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';


const CourseList = ({ courses }) => {
    const terms = ['Fall', 'Spring', 'Winter'];
    const [selectedTerm, setSelectedTerm] = useState(terms);
    const [selectedCourse, setSelectedCourse]=useState([]);

    const handleChange = (_, newSelection) => {
        setSelectedCourse(newSelection);
    };
    const filteredCourses = Object.keys(courses)
        .filter((key) => selectedTerm.includes(courses[key].term))
        .map((key) => (
            <ToggleButton
                key={key}
                value={key}
                sx={{
                    backgroundColor: selectedCourse.includes(key) ? '#07ff15' : '#2196f3',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    padding: '16px',
                    minWidth: '200px',
                    margin: '8px',
                    transition: 'background-color 0.1s',
                    color: selectedCourse.includes(key) ? 'black' : 'white',
                    '&:hover': {
                        backgroundColor: selectedCourse.includes(key) ? '#45a049' : '#1565c0',
                    },
                }}
            >
                <Typography variant="h6">{courses[key].title}</Typography>
                <Typography>{`Term: ${courses[key].term}`}</Typography>
                <Typography>{`Course Number: ${courses[key].number}`}</Typography>
                <Typography>{`Day/Time: ${courses[key].meets}`}</Typography>
            </ToggleButton>
        ));

    return (
        <div>
            <SelectTerm onSelectTerm={setSelectedTerm} selectedTerm={selectedTerm} terms={terms} />
            <ToggleButtonGroup
                value={selectedCourse}
                onChange={handleChange}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}
            >
                {filteredCourses}
            </ToggleButtonGroup>
        </div>
    );
};

export default CourseList;
