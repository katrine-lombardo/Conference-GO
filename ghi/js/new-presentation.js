// Add event listener for when DOM loads
window.addEventListener("DOMContentLoaded", async () => {
  // Declare a variable to hold URL for the API
  const url = `http://localhost:8000/api/conferences/`;

  // Fetch the URL (use await to convert the promise)
  const response = await fetch(url);

  // If the response is ok then get the data using .json method and await
  if (response.ok) {
    const data = await response.json();

    // ------- CONFERENCE DROPDOWN MENU -------
    const selectTag = document.getElementById("conference");
    for (let conference of data.conferences) {
      const option = document.createElement("option");
      option.value = conference.id;
      option.innerHTML = conference.name;
      selectTag.appendChild(option);
    }

    // ------- GET FORM DATA -------
    const formTag = document.getElementById("create-presentation-form");
    formTag.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(formTag);
      const json = JSON.stringify(Object.fromEntries(formData));
      console.log(json);
      console.log("need to submit the form data");

      // ------- SEND DATA TO SERVER -------
      const presentationUrl = `http://localhost:8000/api/conferences/${formData.get("conference")}/presentations/`;
      const fetchConfig = {
        method: "post",
        body: json,
        headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(presentationUrl, fetchConfig);
    if (response.ok) {
      formTag.reset();
      const newPresentation = await response.json();
      console.log(newPresentation);
    }
    });

  } else {
    // Figure out what to do when the response is bad
  }
});
