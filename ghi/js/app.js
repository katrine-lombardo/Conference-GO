window.addEventListener("DOMContentLoaded", async () => {
  const url = "http://localhost:8000/api/conferences/";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Figure out what to do when the response is bad
    } else {
      const data = await response.json();
    }
  } catch (e) {
    // Figure out what to do if an error is raised
  }
});
