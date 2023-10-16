import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


async function loadAttendeesAndConferences() {
  const response1 = await fetch('http://localhost:8001/api/attendees/');
  const response2 = await fetch('http://localhost:8000/api/conferences/');
  if (response1.ok && response2.ok) {
    const data1 = await response1.json();
    const data2 = await response2.json();
    root.render(
      <React.StrictMode>
        <App attendees={data1.attendees} conferences={data2.conferences} />
      </React.StrictMode>
    );
  } else {
    console.error(response1);
    console.error(response2);
  }
}
loadAttendeesAndConferences();


// async function loadConferences() {

//   if (response.ok) {
//     const data = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App conferences={data.conferences} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error(response);
//   }
// }
// loadConferences();
