import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "Pachamama" },
  { id: "e2", title: "Jamaica Gogo" },
  { id: "e3", title: "DMT" },
  { id: "e4", title: "Bar Americas" },
  { id: "e5", title: "Genesis" },
];
function EventsPage() {
  return (
    <>
      <h1>This is the list of events</h1>
      {EVENTS.map((event) => (
        <li key={event.id}>
          <Link to="">{event.title}</Link>
        </li>
      ))}
    </>
  );
}

export default EventsPage;
