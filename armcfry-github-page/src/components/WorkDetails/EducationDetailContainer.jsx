import EducationDetail from './DetailComponent';
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
        <div style={{paddingBottom: '30px'}}>
            <button type="collapse" onClick={handleCollapse} className="EducationExperience">
                <h2><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-red"></i>{title}</h2>
            </button>

            <div
                className="collapsible"
                style={{ maxHeight: maxHeight, transition: 'max-height 0.2s ease-in-out' }}
            >
                {isActive && (
                    <div className="w3-container w3-card w3-white w3-margin-bottom" style={{paddingTop: '30px'}}>
                        {resume_info.education.map((entry, index) => (
                            <EducationDetail key={index} imageName={entry.image} titleText={entry.degree} bodyText={[entry.college, `GPA: ${entry.gpa}`]} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default EducationDetailContainer;