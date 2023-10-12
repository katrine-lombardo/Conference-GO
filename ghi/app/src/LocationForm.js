import React, { useEffect, useState } from "react";

function LocationForm(props) {

  // ------- SUBMIT THE FORM -------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {};
    data.room_count = room_count;
    data.name = name;
    data.city = city;
    data.state = state;

    const locationUrl = "http://localhost:8000/api/locations/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newLocation = await response.json();

      setName("");
      setRoomCount("");
      setCity("");
      setState("");
    }
  };

  // ------- USER INPUT STATE -------
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [room_count, setRoomCount] = useState("");

  // ------- EVENT HANDLERS -------
  const handleStateChange = (e) => {
    const value = e.target.value;
    setState(value);
  };
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };
  const handleRoomCountChange = (e) => {
    const value = e.target.value;
    setRoomCount(value);
  };

  // ------- FETCH DATA FOR STATES -------
  const [states, setStates] = useState([]);
  const fetchData = async () => {
    const url = "http://localhost:8000/api/states/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setStates(data.states);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ------- FORM -------
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a new location</h1>
              <form onSubmit={handleSubmit} id="create-location-form">
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
                  value={city}
                  onChange={handleCityChange}
                  placeholder="City"
                  required
                  type="text"
                  name="city"
                  id="city"
                  className="form-control"
                />
                <input
                  value={room_count}
                  onChange={handleRoomCountChange}
                  placeholder="Room Count"
                  required
                  type="number"
                  name="room_count"
                  id="room_count"
                  className="form-control"
                />
                <select
                  value={state}
                  onChange={handleStateChange}
                  required
                  name="state"
                  id="state"
                  className="form-select"
                >
                  <option value="">Choose a state</option>
                  {states.map((state) => {
                    return (
                      <option
                        key={state.abbreviation}
                        value={state.abbreviation}
                      >
                        {state.name}
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
    </>
  );
}

export default LocationForm;
