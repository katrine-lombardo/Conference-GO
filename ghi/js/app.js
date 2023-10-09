function createCard(title, description, pictureUrl, starts, ends) {
    return `
        <div class="card"
            style="box-shadow: 0 1px 2px rgba(0,0,0,0.07),
            0 2px 4px rgba(0,0,0,0.07),
            0 4px 8px rgba(0,0,0,0.07),
            0 8px 16px rgba(0,0,0,0.07),
            0 16px 32px rgba(0,0,0,0.07),
            0 32px 64px rgba(0,0,0,0.07);
            margin-bottom: 3em;
            ">
            <img src="${pictureUrl}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
            </div>
            <div class="card-footer">${starts} - ${ends}</div>
        </div>
    `;
}

window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Figure out what to do when the response is bad
      } else {
        const data = await response.json();
        const columns = document.querySelectorAll('.col')
        const columnsPerRow = 3
        let columnIndex = 0

        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);

          if (detailResponse.ok) {
            const details = await detailResponse.json();
            const title = details.conference.name;
            const description = details.conference.description;
            const pictureUrl = details.conference.location.picture_url;
            const oldStarts = new Date(details.conference.starts);
            const starts = oldStarts.toLocaleDateString("en-US")
            console.log(starts)
            const oldEnds = new Date(details.conference.ends);
            const ends = oldEnds.toLocaleDateString("en-US")
            console.log(starts)

            const html = createCard(title, description, pictureUrl, starts, ends);
            console.log(html);
            columns[columnIndex].innerHTML += html;
            columnIndex = (columnIndex + 1) % columnsPerRow;
          }
        }

      }
    } catch (e) {
      // Figure out what to do if an error is raised
    }

  });
