import React from 'react';

const NoPage = () => {
  return (
    <div className="no-page col-md-9 p-5 mt-4">
      <h1 className="text-white">404 - Page Not Found</h1>
      <p className="mt-4" style={{ color: 'grey' }}>
        Sorry, the page you are looking for does not exist. Please check the URL or go back to the home page.
      </p>
      <div className="dotted-line-container mt-5" style={{ width: '100%' }}>
        <div className="dotted-line" style={{ width: '100%' }}></div>
      </div>
      <div className="connect mt-4 mb-4">
        <div className="arrows">
          <i className='bx bx-right-arrow-alt'></i>
          <i className='bx bx-right-arrow-alt'></i>
          <i className='bx bx-right-arrow-alt'></i>
        </div>
        <div>
          <p>Let's Connect!</p>
        </div>
      </div>
      <div className="copyright" style={{ color: 'gainsboro' }}>
        <p>© Copyright 2024. All rights Reserved. Sachin Kumar</p>
      </div>
    </div>
  );
}

export default NoPage;
