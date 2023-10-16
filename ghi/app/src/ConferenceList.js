function ConferenceList(props) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Conference Name</th>
            <th>Starts</th>
          </tr>
        </thead>
        <tbody>
          {props.conferences.map(conference => {
            return (
              <tr key={conference.id}>
                <td>{ conference.id }</td>
                <td>{ conference.name }</td>
                <td>{ conference.starts }</td>
                {console.log(conference)}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  export default ConferenceList;
