import { Link } from "react-router-dom";
const DUMMY_Events = [
  {
    id: "e1",
    title: "Some event 1",
  },
  {
    id: "e2",
    title: "Some event 2",
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventPage</h1>
      <ul>
        {DUMMY_Events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
