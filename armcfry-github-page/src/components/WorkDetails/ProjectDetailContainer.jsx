import DetailComponentTile from './DetailComponentTile';
import React, { useState } from 'react';
import './ProjectDetailContainer.css';
import resume_info from '../../data/resume_info.json';

const WorkDetailContainer = ({title}) => {
    const [isActive, setIsActive] = useState(false);
    const [maxHeight, setMaxHeight] = useState('0px');
    const handleCollapse = () => {
        setIsActive(!isActive);
        setMaxHeight(isActive ? '0px' : '5000px'); // max height so that the text can be open and not be cut off by other elements
    };

    return (
        <div style={{paddingBottom: '30px'}}>
            <button type="collapse" onClick={handleCollapse} className="workExperience">
                <h2><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-red"></i>{title}</h2>
            </button>

            <div className="tile-container">
                {isActive && (
                    <>
                        {resume_info.projects.map((entry, index) => (
                            <DetailComponentTile key={index} imageName="" titleText={entry.name} bodyText={entry.description} headerText={entry.date} />
                        ))}
                    </>
                )}

            </div>
        </div>
    );
};

export default WorkDetailContainer;