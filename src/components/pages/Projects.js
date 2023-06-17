import React from 'react';
import '../../App.css';

const projectsList = [
  'PROJECTS-',
'Timeseries forecasting – cl_AI_mate ',
'E- Mental Health Assistant ',
'Bye2Doubts',
'Ad-view Prediction on YouTube',
'Alumni Portal App'

  // Add more achievements as needed
];

export default function Projects() {
  return (
    <div className='projects'>
   
      {projectsList.length > 0 ? (
        <ul>
          {projectsList.map((projects, index) => (
            <li key={index}>{projects}</li>
          ))}
        </ul>
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
}
