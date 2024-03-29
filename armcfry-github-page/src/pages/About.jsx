import React from 'react';
import WorkDetailContainer from '../components/WorkDetails/WorkDetailContainer';
import EducationDetailContainer from '../components/WorkDetails/EducationDetailContainer';
import ProjectDetailContainer from '../components/WorkDetails/ProjectDetailContainer';
import './About.css';

function About() {
  return (
    <html>
      <head>
        {/* <title>W3.CSS Template</title> */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style>
          {`
            html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
          `}
        </style>
      </head>
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        <div className="w3-row-padding">
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <div className="w3-display-container">
                <img src={require('../profile_pic.png')} style={{ width: '100%' }} alt="Avatar" />
              </div>
              <div className="w3-container">
                <h2>Adam McFry</h2>
                <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-red"></i>Senior SDET</p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-red"></i>Glendale, CA</p>
                <p>
                  <a href="mailto:armcfry@gmail.com" target="_blank" rel="noopener noreferrer" className="w3-hover-opacity">
                    <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-red"></i>
                  </a>
                  armcfry@gmail.com
                </p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-red"></i>(256) 689-6898</p>

                <p>
                  <a href="https://linkedin.com/in/armcfry64" target="_blank" rel="noopener noreferrer" className="w3-hover-opacity">
                    <i className="fa fa-linkedin w3-margin-right"></i>
                  </a>
                  Connect on LinkedIn
                </p>

                <p>
                  <a href="https://github.com/armcfry" target="_blank" rel="noopener noreferrer" className="w3-hover-opacity">
                    <i className="fa fa-github w3-margin-right"></i>
                  </a>
                  GitHub Profile
                </p>

              </div>
            </div>
          </div>

          <div className="w3-twothird">
            <WorkDetailContainer title={"Work Experience"} />
            <EducationDetailContainer title={"Education"} />
            <ProjectDetailContainer title={"Projects"} />
          </div>
        </div>
      </div >
    </html >
  );
}

export default About;