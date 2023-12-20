import WorkDetail from './WorkDetail';
import './WorkDetailContainer.css';
import resume_info from '../../data/resume_info.json';

// TODO: create object to pass through to represent all of the work details to display (class obj for work details?)
const WorkDetailContainer = () => {
    // read data from resume_info.json
    return (
        <div>
            {resume_info.experience.map((entry, index) => (
                <WorkDetail key={index} workDetails={entry} />
            ))}
        </div>
    );
};

export default WorkDetailContainer;