// Add event listener for when DOM loads
window.addEventListener("DOMContentLoaded", async () => {
    // Declare a variable to hold URL for the API
    const url = "http://localhost:8000/api/locations/";

    // Fetch the URL (use await to convert the promise)
    const response = await fetch(url);

    // If the response is ok then get the data using .json method and await
    if (response.ok) {
      const data = await response.json();
      console.log(data)

      // ------- LOCATION DROPDOWN MENU -------
      const selectTag = document.getElementById("location");
      for (let location of data.locations) {
        const option = document.createElement("option");
        option.value = location.id;
        option.innerHTML = location.name;
        selectTag.appendChild(option);
      }

      // ------- GET FORM DATA -------
      const formTag = document.getElementById("create-conference-form");
      formTag.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));
        console.log(json);
        console.log("need to submit the form data");

        // ------- SEND DATA TO SERVER -------
        const conferenceUrl = "http://localhost:8000/api/conferences/";
        const fetchConfig = {
          method: "post",
          body: json,
          headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(conferenceUrl, fetchConfig);
      if (response.ok) {
        formTag.reset();
        const newConference = await response.json();
        console.log(newConference);
      }
      });

    } else {
      // Figure out what to do when the response is bad
    }
  });
