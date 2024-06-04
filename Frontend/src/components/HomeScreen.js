import React, { useState } from 'react';
import ProgramTypes from './ProgramTypes';
import Rules from './Rules';
import ValidateContent from './ValidateContent';
import './HomeScreen.css';

function HomeScreen() {
  const [activeComponent, setActiveComponent] = useState('ProgramTypes');

  return (
    <div className="home-screen">
      <div className="home-screen__sidebar">
        <div>Program</div>
        <button className="home-screen__button" onClick={() => setActiveComponent('ProgramTypes')}>Program Types</button>
        <button className="home-screen__button" onClick={() => setActiveComponent('Rules')}>Rules</button>
        <hr />
        <div /*{style={{margin-left: "5px"}}}*/>Validation</div>
        <button className="home-screen__button" onClick={() => setActiveComponent('ValidateContent')}>Validate Content</button>
      </div>  
      <div className="home-screen__content">
        {activeComponent === 'ProgramTypes' && <ProgramTypes />}
        {activeComponent === 'Rules' && <Rules />}
        {activeComponent === 'ValidateContent' && <ValidateContent />}
      </div>
    </div>
  );
}

export default HomeScreen;
