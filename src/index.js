import React from 'react';
import ReactDOM from 'react-dom/client';
import '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/index.css';
import App from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/App.js';
import reportWebVitals from '/Users/JazlynHo/Desktop/Northwestern/DISC/VS-folder/meal-and-mingle/src/reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
