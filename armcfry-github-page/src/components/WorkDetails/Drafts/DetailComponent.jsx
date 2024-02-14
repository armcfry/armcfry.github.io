import './DetailComponent.css'
import React, { useState } from 'react';

const DetailComponent = ({ imageName, titleText, bodyText }) => {
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
          <img src={require(`../../images/${imageName}`)} alt="Company Logo" className="company-logo" />
        </div>
        <div className="text-container">
          <p1 className="role">{titleText}</p1>
        </div>
      </button>

      <div
        className="collapsible"
        style={{ maxHeight: maxHeight, transition: 'max-height 0.2s ease-in-out' }}
      >
        {/* make this dynamic to allow for the body text to have multiple list entries */}
        {!isActive && (
          <>{bodyText.map((line, index) => <li key={index}>{line}</li>)}</>
        )}

      </div>
    </div>
  );
};

export default DetailComponent;