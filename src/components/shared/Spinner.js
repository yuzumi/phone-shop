import React from 'react';

const Spinner = () => (
  <div className="spinner py-5">
    <div className="d-flex align-items-center justify-content-center">
      <div className="spinner-grow" style={{backgroundColor: '#2bbbad'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);

export default Spinner;