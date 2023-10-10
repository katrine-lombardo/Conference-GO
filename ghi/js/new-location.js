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
    console.log(data);

    // ------- STATE DROPDOWN MENU -------
    const selectTag = document.getElementById("state");
    for (let state of data.states) {
      const option = document.createElement("option");
      option.value = state.abbreviation;
      option.innerHTML = state.name;
      selectTag.appendChild(option);
    }

    // ------- GET FORM DATA -------
    const formTag = document.getElementById("create-location-form");
    formTag.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(formTag);
      const json = JSON.stringify(Object.fromEntries(formData));
      console.log(json);
      console.log("need to submit the form data");

      // ------- SEND DATA TO SERVER -------
      const locationUrl = "http://localhost:8000/api/locations/";
      const fetchConfig = {
        method: "post",
        body: json,
        headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      formTag.reset();
      const newLocation = await response.json();
      console.log(newLocation);
    }
    });

  } else {
    // Figure out what to do when the response is bad
  }
});
