// Add event listener for when DOM loads
window.addEventListener("DOMContentLoaded", async () => {
  // Declare a variable to hold URL for the API
  const url = "http://localhost:8000/api/states/";

  // Fetch the URL (use await to convert the promise)
  const response = await fetch(url);
  console.log(response);

  // If the response is ok then get the data using .json method and await
  if (response.ok) {
    const data = await response.json();
    console.log(data)

    const selectTag = document.getElementById('state')

    // ------- STATE DROPDOWN MENU -------

    // Get the select tag element by its id 'state'
    const stateDiv = document.querySelector("#state");
    console.log(stateDiv);


    // For each state in the states property of the data
    for (let state of data.states) {
        // Create an 'option' element
        const option = document.createElement('option')

        // Set the '.value' property of the option element to the state's abbreviation
        option.value = state.abbreviation

        // Set the '.innerHTML' property of the option element to the state's name
        option.innerHTML = state.name

        // Append the option element as a child of the select tag
        selectTag.appendChild(option)
    }


    } else {
    // Figure out what to do when the response is bad
    }
});
