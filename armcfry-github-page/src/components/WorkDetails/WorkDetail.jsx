import './WorkDetail.css'
import React, { useState } from 'react';

const WorkDetail = ({ workDetails }) => {
  const [isActive, setIsActive] = useState(false);
  // start in open state instead of closed state
  const [maxHeight, setMaxHeight] = useState('5000px');
  const handleCollapse = () => {
    setIsActive(!isActive);
    setMaxHeight(isActive ? '5000px' : '0px'); // max height so that the text can be open and not be cut off by other elements
  };

  return (
    <div>
      <button type="collapse" onClick={handleCollapse} className="right-align container-button button">
        <div className="image-container">
          <img src={require(`../../images/${workDetails.company}_logo_transparent.png`)} alt="Company Logo" className="company-logo" />
        </div>
        <div className="text-container">
          <p1 className="role">{workDetails.role}</p1>
        </div>
      </button>

      <div
        className="collapsible"
        style={{ maxHeight: maxHeight, transition: 'max-height 0.2s ease-in-out' }}
      >
        {!isActive && (
          <div>
            {workDetails.description.split('\n').map((line, index) => <li key={index}>{line}</li>)}
          </div>
        )}

      </div>
    </div>
  );
};

export default WorkDetail;