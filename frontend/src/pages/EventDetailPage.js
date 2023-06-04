import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>EventDetailPage</h1>
      {params.id} <p>Event Id: {params.eventId}</p>
    </>
  );
};

export default EventDetailPage;
