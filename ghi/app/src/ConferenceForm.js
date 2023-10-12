import React, { useEffect, useState } from "react";

function ConferenceForm(props) {
  // ------- SUBMIT THE FORM -------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {};
    console.log(data)
    data.name = name;
    data.description = description;
    data.max_presentations = max_presentations;
    data.max_attendees = max_attendees;
    data.starts = starts;
    data.ends = ends;
    data.location = location;

    const conferenceUrl = "http://localhost:8000/api/conferences/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(conferenceUrl, fetchConfig);
    if (response.ok) {
      const newConference = await response.json();
      console.log(newConference);
      setName("");
      setDescription("");
      setMaxPresentations("");
      setMaxAttendees("");
      setStarts("");
      setEnds("");
      setLocation("");
    }
  };

  // ------- USER INPUT STATE -------

  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [max_presentations, setMaxPresentations] = useState("");
  const [max_attendees, setMaxAttendees] = useState("");
  const [starts, setStarts] = useState("");
  const [ends, setEnds] = useState("");

  // ------- EVENT HANDLERS -------

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
  };
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
  };
  const handleMaxPresentationsChange = (e) => {
    const value = e.target.value;
    setMaxPresentations(value);
  };
  const handleMaxAttendeesChange = (e) => {
    const value = e.target.value;
    setMaxAttendees(value);
  };
  const handleStartsChange = (e) => {
    const value = e.target.value;
    setStarts(value);
  };
  const handleEndsChange = (e) => {
    const value = e.target.value;
    setEnds(value);
  };

  // ------- FETCH DATA FOR LOCATIONS -------
  const [locations, setLocations] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8000/api/locations/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setLocations(data.locations);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ------- FORM -------
  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new conference</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <input
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <input
                value={starts}
                onChange={handleStartsChange}
                placeholder="Start date"
                required
                type="date"
                name="starts"
                id="starts"
                className="form-control"
              />
              <input
                value={ends}
                onChange={handleEndsChange}
                placeholder="End date"
                required
                type="date"
                name="ends"
                id="ends"
                className="form-control"
              />
              <input
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Description"
                required
                type="textarea"
                name="description"
                id="description"
                className="form-control"
              />
              <input
                value={max_presentations}
                onChange={handleMaxPresentationsChange}
                placeholder="Maximum presentations"
                required
                type="number"
                name="max_presentations"
                id="max_presentations"
                className="form-control"
              />
              <input
                value={max_attendees}
                onChange={handleMaxAttendeesChange}
                placeholder="Maximum attendees"
                required
                type="number"
                name="max_attendees"
                id="max_attendees"
                className="form-control"
              />
              <select
                value={location}
                onChange={handleLocationChange}
                required
                id="location"
                name="location"
                className="form-select"
              >
                <option value="">Choose a location</option>
                {locations.map((location) => {
                  return (
                    <option
                    key={location.id}
                    value={location.id}>
                      {location.name}
                    </option>
                  );
                })}
              </select>
              <button onClick={handleSubmit} className="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConferenceForm;
