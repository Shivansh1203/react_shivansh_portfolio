import React from 'react';
import '../../App.css';

const achievementsList = [
  'ACHIEVEMENTS-',
'Winner of Academic Grand Challenge on Climate Change organized by T-AIM NASSCOM in collaboration with Capgemini and the Government of Telangana (Jan 23 - Mar 23). Prize money Rs. 5,00,000/-. Role - Data Analyst and User Interface designer',
'GVDSP Scholarship recipient at VITB',
'Cracked UPSC - NDA Examination and reached the final stage of SSB interview (Class – XII)',
'Cleared round 1 of National Engineering Olympiad (AIR – 2475) Nov 21, round 2 AIR – 661',
'Consecutive 5 years scholar badge awardee (Class XII)'

  // Add more achievements as needed
];

export default function Achievements() {
  return (
    <div className='achievements'>
      {/* <h1>Achievements</h1> */}
      {achievementsList.length > 0 ? (
        <ul>
          {achievementsList.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      ) : (
        <p>No achievements found.</p>
      )}
    </div>
  );
}
