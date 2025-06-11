import { useEffect, useState } from "react"; 
import { events } from "../../../lib/data/sampleData";
import EventForm from "../form/EventForm";
import EventCard from "./EventCard";
import type { AppEvent } from "../../../lib/types";

type Props = {
  formOpen: boolean;
  setFormOpen: (open: boolean) => void;
}

export default function EventDashboard({ formOpen, setFormOpen }: Props) {
  const [appEvents, setAppEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
     setAppEvents(events);  

     return () => {
       setAppEvents([]); // Cleanup function to reset events on unmount
     }
  }, []);  

  return (
    <div className="flex flex-row w-full gap-6">
      <div className="w-3/5 flex flex-col gap-4">
        {appEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
        }
      </div>
      <div className="w-2/5">
        {formOpen && (
          <EventForm setFormOpen={() => setFormOpen(false)} />
        )}
      </div>
    </div>
  )
}
