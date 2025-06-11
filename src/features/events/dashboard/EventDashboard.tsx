import { useEffect, useState } from "react"; 
import { events } from "../../../lib/data/sampleData";
import EventForm from "../form/EventForm";
import EventCard from "./EventCard";
import type { AppEvent } from "../../../lib/types";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  formOpen: boolean;
  setFormOpen: (open: boolean) => void;
}

export default function EventDashboard({ formOpen, setFormOpen }: Props) {
  const [appEvents, setAppEvents] = useState<AppEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);  
  
  const handleCreateEvent = (event: AppEvent) => {
    setAppEvents((prevEvents) => [...prevEvents, event]);
  };

  const handleSelectEvent = (event: AppEvent) => {
    setSelectedEvent(event);
    setFormOpen(true); // Open the form when an event is selected
  };
  
  useEffect(() => {
     setAppEvents(events);  

     return () => {
       setAppEvents([]); // Cleanup function to reset events on unmount
     }
  }, []);  

  return (
    <div className="flex flex-row w-full gap-6">
      <div className="w-3/5">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.3, type: "easeInOut" }}
        >
        <div className="flex flex-col gap-4">
          {appEvents.map((event) => (
              <EventCard selectEvent={handleSelectEvent} key={event.id} event={event} />
            ))
          }
          </div>  
        </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-2/5 overflow-hidden">
        <AnimatePresence>
          {formOpen && (
                    <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 200 }}
                    transition={{ duration: 0.3, type: "easeInOut" }}
                  >
          <EventForm setFormOpen={() => setFormOpen(false)} createEvent={handleCreateEvent} selectedEvent={selectedEvent} />
          </motion.div> 
        )}
        </AnimatePresence>
      </div>
    </div>
  )
}
