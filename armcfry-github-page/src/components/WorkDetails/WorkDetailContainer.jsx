import DetailComponentTile from './DetailComponentTile';
import React, { useState } from 'react';
import './WorkDetailContainer.css';
import resume_info from '../../data/resume_info.json';

const WorkDetailContainer = ({ title }) => {
    const [isActive, setIsActive] = useState(false);
    const [maxHeight, setMaxHeight] = useState('0px');
    const handleCollapse = () => {
        setIsActive(!isActive);
        setMaxHeight(isActive ? '0px' : '5000px'); // max height so that the text can be open and not be cut off by other elements
    };

    return (
        <div>
            <button type="collapse" onClick={handleCollapse} className="workExperience">
                <h2><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-white"></i>{title}</h2>
            </button>

            <div className="tile-container">
                {isActive && (
                    <>
                        {resume_info.experience.map((entry, index) => (
                            <DetailComponentTile
                                key={index}
                                imageName={entry.image}
                                titleText={entry.role}
                                bodyText={entry.description}
                                headerText={entry.start_date + " - " + entry.end_date}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default WorkDetailContainer;