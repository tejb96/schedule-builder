
import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import { Paper } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import useCourses from './utilities/useCourses';


const queryClient = new QueryClient();
const App = () => {
    const { data, isLoading, isError } = useCourses();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching courses</p>;
    }

    return (
        <div className="App">
            <header className="App-header">
                <Paper>
                    <Banner title={data.title} />
                    <CourseList courses={data.courses} />
                </Paper>
            </header>
        </div>
    );
};

const AppWrapper = () => (
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

export default AppWrapper;