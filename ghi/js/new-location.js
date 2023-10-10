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
    } else {
    // Figure out what to do when the response is bad
    }
});
