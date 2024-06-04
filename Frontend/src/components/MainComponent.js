import React from 'react';
import Header from './Header';
import HomeScreen from './HomeScreen';
import './MainComponent.css';

function MainComponent() {
  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <HomeScreen />
      </div>
    </div>
  );
}

export default MainComponent;
