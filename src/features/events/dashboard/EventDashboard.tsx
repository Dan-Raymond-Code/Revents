import { events } from "../../../lib/data/sampleData";
import EventForm from "../form/EventForm";
import EventCard from "./EventCard";

type Props = {
  formOpen: boolean;
  setFormOpen: (open: boolean) => void;
}

export default function EventDashboard({ formOpen, setFormOpen }: Props) {
  // This is a placeholder for the actual event data fetching logic
  return (
    <div className="flex flex-row w-full gap-6">
      <div className="w-3/5 flex flex-col gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))
      }
      </div>
      <div className="w-2/5">
      {formOpen && (
        <EventForm setFormOpen={() => setFormOpen()} />
      )}
      </div>
    </div>
  )
}
