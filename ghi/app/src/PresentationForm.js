import React, {useEffect, useState } from 'react';

function PresentationForm () {
  const [conferences, setConferences] = useState([]);

  const [formData, setFormData] = useState({
    presenter_name: '',
    company_name: '',
    presenter_email: '',
    title: '',
    synopsis: '',
    conference: '',
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

    const url = `http://localhost:8000/api/conferences/${formData.conference}/presentations/`;
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      setFormData({
        presenter_name: '',
        company_name: '',
        presenter_email: '',
        title: '',
        synopsis: '',
        conference: '',
      })
    }
  }

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
        ...formData,
        [inputName]: value
    })
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new presentation</h1>
          <form onSubmit={handleSubmit} id="create-location-form">
            <div className="form-floating mb-3">
              <input value={formData.presenter_name} onChange={handleFormChange} placeholder="Presenter Name" required type="text" name="presenter_name" id="presenter_name" className="form-control" />
              <label htmlFor="presenter_name">Presenter Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.company_name} onChange={handleFormChange} placeholder="Company Name" required type="text" name="company_name" id="company_name" className="form-control" />
              <label htmlFor="company_name">Company Name</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.presenter_email} onChange={handleFormChange} placeholder="Presenter Email" required type="email" name="presenter_email" id="presenter_email" className="form-control" />
              <label htmlFor="presenter_email">Presenter Email</label>
            </div>
            <div className="form-floating mb-3">
              <input value={formData.title} onChange={handleFormChange} placeholder="Title" required type="text" name="title" id="title" className="form-control" />
              <label htmlFor="title">Title</label>
            </div>
            <div className="form-floating mb-3">
              <textarea value={formData.synopsis} onChange={handleFormChange} placeholder="Synopsis" required type="textarea" name="synopsis" id="synopsis" className="form-control"></textarea>
              <label htmlFor="synopsis">Synopsis</label>
            </div>
            <div className="mb-3">
              <select value={formData.conference} onChange={handleFormChange} required name="conference" id="conference" className="form-select">
                <option value="">Choose a conference</option>
                {conferences.map(conference => {
                  return (
                    <option key={conference.id} value={conference.id}>
                      {conference.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PresentationForm;
