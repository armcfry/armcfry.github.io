import WorkDetail from './WorkDetail';
import './WorkDetailContainer.css';

// TODO: create object to pass through to represent all of the work details to display (class obj for work details?)
const WorkDetailContainer = () => {
    return (
        <div>
            <WorkDetail/>
            <WorkDetail/>
            <WorkDetail/>
        </div>
    );
};

export default WorkDetailContainer;