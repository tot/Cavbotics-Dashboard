import React, { useState, useEffect } from 'react';

const Hello = () => {
  return (
    <div>
      <div className="Hello">Hello</div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <button type="button">
          <span role="img" aria-label="books">
            📚
          </span>
          Read our docs
        </button>
        <button
          type="button"
          onClick={() => window.electron.ipcRenderer.network()}
        >
          dsada
        </button>
      </div>
    </div>
  );
};

export default Hello;
