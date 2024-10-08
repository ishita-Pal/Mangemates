
import React from 'react';
import './Birthdays.css'; // Ensure you create and import a CSS file for styling

const Birthdays = () => {
  return (
    <div className="birthday-container">
      <h2>Today's Birthdays</h2>
      <div className="birthday-entry">
        <div className="avatar mike"></div>
        <div className="details">
          <span className="name">Mike</span>
          <span className="role">UX Designer</span>
        </div>
      </div>
      <div className="birthday-entry">
        <div className="avatar sandy"></div>
        <div className="details">
          <span className="name">Sandy</span>
          <span className="role">Product Manager</span>
        </div>
      </div>
      <div className="birthday-entry">
        <div className="avatar ariv"></div>
        <div className="details">
          <span className="name">Ariv</span>
          <span className="role">Software Dev</span>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
