import './WorkDetail.css'
import React, { useState } from 'react';

const WorkDetail = ({ workDetails }) => {
  const [isActive, setIsActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');

  const handleCollapse = () => {
    setIsActive(!isActive);
    setMaxHeight(isActive ? '0px' : '1000px'); // Adjust the 1000px as needed
  };

  return (
    <div>
      <button type="collapse" onClick={handleCollapse}>{workDetails.role}</button>

      <div
        className="collapsible"
        style={{ maxHeight: maxHeight, transition: 'max-height 0.2s ease-in-out' }}
      >
        {isActive && (
          <div>
            {workDetails.description.split('\n').map((line, index) => <p key={index}>{line}</p>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkDetail;
// heading

// bullets