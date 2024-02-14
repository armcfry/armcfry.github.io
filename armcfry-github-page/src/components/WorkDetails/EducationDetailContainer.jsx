import DetailComponentTile from './DetailComponentTile';
import React, { useState } from 'react';
import './EducationDetailContainer.css';
import resume_info from '../../data/resume_info.json';

const EducationDetailContainer = ({title}) => {
    const [isActive, setIsActive] = useState(false);
    const [maxHeight, setMaxHeight] = useState('0px');
    const handleCollapse = () => {
        setIsActive(!isActive);
        setMaxHeight(isActive ? '0px' : '5000px'); // max height so that the text can be open and not be cut off by other elements
    };

    return (
        <div>
            <button type="collapse" onClick={handleCollapse} className="educationExperience">
                <h2><i className="fa fa-book fa-fw w3-margin-right w3-xxlarge w3-text-white"></i>{title}</h2>
            </button>

            <div className='tile-container'>
                {isActive && (
                    <>
                        {resume_info.education.map((entry, index) => (
                            <DetailComponentTile key={index} imageName={entry.image} titleText={entry.degree} bodyText={[entry.college, `GPA: ${entry.gpa}`]} />
                        ))}
                    </>
                )}
                {isActive && (
                    <>
                        {resume_info.certifications.map((entry, index) => (
                            <DetailComponentTile key={index} imageName={entry.image} titleText={`${entry.title}`} bodyText={[entry.company, entry.date]} />
                        ))}
                    </>
                )}

            </div>
        </div>
    );
};

export default EducationDetailContainer;