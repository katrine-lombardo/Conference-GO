import React, { useEffect, useState } from "react";

function LocationForm() {
  const [states, setStates] = useState([]);

  const fetchData = async () => {
    // Declare a variable to hold URL for the API
    const url = "http://localhost:8000/api/states/";

    // Fetch the URL (use await to convert the promise)
    const response = await fetch(url);

    // If the response is ok then get the data using .json method and await
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
