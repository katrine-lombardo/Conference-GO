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
      <Nav />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/conferences/new" element={<ConferenceForm />} />
            <Route path="/attendees/new" element={<AttendConferenceForm />} />
            <Route path="/locations/new" element={<LocationForm />} />
            <Route
              path="/attendees"
              element={<AttendeesList attendees={props.attendees} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
