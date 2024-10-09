import React from 'react';

const NoPageFound = () => {
  return (
    <div className="no-page-container">
      <h1 className="no-page-title">404</h1>
      <p className="no-page-message">Oops! No Page Found.</p>
      <p className="no-page-message">Sorry, we couldn't find the page you are looking for. Possible reasons:</p>
      <ul className="no-page-reasons">
        <li>It may be under development.</li>
        <li>You might not have permission to access this page.</li>
        <li>It could have been removed or relocated.</li>
      </ul>
      <p className="no-page-message">What you can do:</p>
      <ul className="no-page-actions">
        <li>Contact the admin.</li>
        <li>Report the issue to our company.</li>
        <li className='clickable' onClick={()=> window.location.href = 'tel:+998943669473'}>Call +998936049473 for support.</li>
      </ul>
      <a href="/" className="back-home">Back to Home</a>
    </div>
  );
};

export default NoPageFound;
