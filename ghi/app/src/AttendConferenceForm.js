import React, {useEffect, useState } from 'react';

function AttendConferenceForm() {
  const [conferences, setConferences] = useState([]);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [formData, setFormData] = useState ({
    conference: '',
    name: '',
    email: '',
  })


  const fetchData = async () => {
    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setConferences(data.conferences);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:8001/api/attendees/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, fetchOptions);

    if (response.ok) {
      setFormData({
        conference: '',
        name: '',
        email: '',
      })
    }
  }

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value
    });
  }

  // CSS classes for rendering
  let spinnerClasses = 'd-flex justify-content-center mb-3';
  let dropdownClasses = 'form-select d-none';
  if (conferences.length > 0) {
    spinnerClasses = 'd-flex justify-content-center mb-3 d-none';
    dropdownClasses = 'form-select';
  }

  let messageClasses = 'alert alert-success d-none mb-0';
  let formClasses = '';
  if (hasSignedUp) {
    messageClasses = 'alert alert-success mb-0';
    formClasses = 'd-none';
  }

  return (
    <div className="my-5 container">
      <div className="row">
        <div className="col col-sm-auto">
          <img width="300" className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" />
        </div>
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit} className={formClasses}  id="create-attendee-form">
                <h1 className="card-title">It's Conference Time!</h1>
                <p className="mb-3">
                  Please choose which conference
                  you'd like to attend.
                </p>
                <div className={spinnerClasses} id="loading-conference-spinner">
                  <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div className="mb-3">
                  <select value={formData.conference} onChange={handleFormChange} name="conference" id="conference" className={dropdownClasses} required>
                    <option value="">Choose a conference</option>
                    {conferences.map(conference => {
                      return (
                        <option key={conference.href} value={conference.href}>{conference.name}</option>
                      )
                    })}
                  </select>
                </div>
                <p className="mb-3">
                  Now, tell us about yourself.
                </p>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={formData.name} onChange={handleFormChange} required placeholder="Your full name" type="text" id="name" name="name" className="form-control" />
                      <label htmlFor="name">Your full name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input value={formData.email} onChange={handleFormChange} required placeholder="Your email address" type="email" id="email" name="email" className="form-control" />
                      <label htmlFor="email">Your email address</label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-lg btn-primary">I'm going!</button>
              </form>
              <div className={messageClasses} id="success-message">
                Congratulations! You're all signed up!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendConferenceForm;
