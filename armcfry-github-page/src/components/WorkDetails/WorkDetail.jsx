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
<button type="collapse" onClick={handleCollapse} className="right-align container-button button">
  <div className="image-container">
    <img src={require(`../../images/${workDetails.company}_logo_transparent.png`)} alt="Company Logo" className="company-logo" />
  </div>
  <div className="text-container">
    <p1 className="role">{workDetails.role}</p1>
    {/* <p className="date">
      ({workDetails.start_date} - {workDetails.end_date})
    </p> */}
  </div>
</button>

      <div
        className="collapsible"
        style={{ maxHeight: maxHeight, transition: 'max-height 0.2s ease-in-out' }}
      >
        {isActive && (
          <div>
            {workDetails.description.split('\n').map((line, index) => <li key={index}>{line}</li>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkDetail;
// heading

// bullets