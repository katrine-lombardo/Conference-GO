import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


async function loadAttendees() {
  const response = await fetch('http://localhost:8001/api/attendees/');
  if (response.ok) {
    const data = await response.json();
    root.render(
        <App attendees={data.attendees} />
    );
  } else {
    console.error(response);
  }
}
loadAttendees();
