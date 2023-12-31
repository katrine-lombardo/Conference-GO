import Nav from "./Nav";
import AttendeesList from "./AttendeesList";
import LocationForm from "./LocationForm";
import AttendConferenceForm from "./AttendConferenceForm";
import ConferenceForm from "./ConferenceForm";
import ConferenceList from "./ConferenceList"
import PresentationForm from "./PresentationForm";
import MainPage from "./MainPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(props) {
  if (props.attendees === undefined) {
    return null;
  } else if (props.conferences === undefined) {
    return null;
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="locations">
              <Route path="new" element={<LocationForm />} />
            </Route>
            <Route path="attendees">
              <Route path="" index element={<AttendeesList attendees={props.attendees} />}/>
              <Route path="new" element={<AttendConferenceForm />} />
            </Route>
            <Route path="conferences">
              <Route path="" index element={<ConferenceList conferences={props.conferences} />}/>
              <Route path="new" element={<ConferenceForm />} />
            </Route>
            <Route path="presentations">
              <Route path="new" element={<PresentationForm />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
