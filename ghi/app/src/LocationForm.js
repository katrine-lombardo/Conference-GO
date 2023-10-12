import React, { useEffect, useState } from "react";

function LocationForm(props) {
  const [states, setStates] = useState([]);

  // Event handlers and methods
  const [name, setName] = useState([]);
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value)
  }

  const [city, setCity] = useState([]);
  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value)
  }

  const [room_count, setRoomCount] = useState([]);
  const handleRoomCountChange = (e) => {
    const value = e.target.value;
    setRoomCount(value)
  }

  // Fetch data (Declare variable, fetch url, get data using json + await)
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

  // ------- STATE DROPDOWN MENU -------
  return (
    <>
    <p>A location form</p>
    <form>
    <input onChange={handleNameChange} placeholder="Name" required
       type="text" name="name" id="name"
       className="form-control" />
    <input onChange={handleCityChange} placeholder="City" required
       type="text" name="city" id="city"
       className="form-control" />
    <input onChange={handleRoomCountChange} placeholder="Room Count" required
       type="number" name="room_count" id="room_count"
       className="form-control" />
    <select required name="state" id="state" className="form-select">
      <option value="">Choose a state</option>
      {states.map(state => {
        return (<option key={state.abbreviation} value={state.abbreviation}>
            {state.name}
            </option>);
      })}
    </select>
    </form>
    </>
  );
}

export default LocationForm;
