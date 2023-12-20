const CourseList = ({ courses }) => (
    <div>
        {Object.entries(courses).map(([courseCode, course]) => (
            <h6 key={courseCode}>
                {course.term} {"CS"} {course.number+": "} {course.title}</h6>
        ))}
    </div>
);

export default CourseList;
