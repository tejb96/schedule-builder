
const CourseList = ({ courses }) => (
    <div>
        <ul>
            {Object.entries(courses).map(([courseCode, course]) => (
                <li key={courseCode}>
                    {course.title} - {course.meets}
                </li>
            ))}
        </ul>
    </div>
);

export default CourseList;