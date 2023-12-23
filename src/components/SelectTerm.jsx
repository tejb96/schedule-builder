// SelectTerm.jsx

import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Terms = ['Fall', 'Spring', 'Winter'];

const SelectTerm = () => {
    const [selectedTerm, setSelectedTerm] = useState(0);

    const nextTerm = () => {
        const newTerm = (selectedTerm + 1) % Terms.length;
        setSelectedTerm(newTerm);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={nextTerm}>
                {Terms[selectedTerm]}
            </Button>
        </div>
    );
};

export default SelectTerm;
