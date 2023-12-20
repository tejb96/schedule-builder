// src/utilities/useCourses.js
import { useQuery } from 'react-query';

const fetchCourses = async () => {
    const response = await fetch('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    if (!response.ok) {
        throw new Error('Failed to fetch courses');
    }
    return response.json();
};

const useCourses = () => {
    return useQuery('courses', fetchCourses);
};

export default useCourses;
