import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId; // here we are accessing the key 'eventId' from the query and getting its value which is the variable we create here
  const event = getEventById(eventId); // pass in eventId to get the event

  if (!event) return <p>No event Found!</p>;

  return (
    <div>
      <h1>Event Detail</h1>
    </div>
  );
}
export default EventDetailPage;
