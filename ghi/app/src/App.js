import Nav from "./Nav";
import AttendeesList from "./AttendeesList";
import LocationForm from "./LocationForm";
import AttendConferenceForm from "./AttendConferenceForm";
import ConferenceForm from "./ConferenceForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="" index element={<App />} >

            </Route>
            <Route path="locations">
              <Route path="new" element={<LocationForm />} />
            </Route>
            <Route path="attendees">
              <Route path="new" element={<AttendConferenceForm />} />
              <Route path="" index element={<AttendeesList attendees={props.attendees} />}/>
            </Route>
            <Route path="conferences">
              <Route path="new" element={<ConferenceForm />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
