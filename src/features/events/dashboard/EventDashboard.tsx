import { useEffect } from "react"; 
import { events } from "../../../lib/data/sampleData";
import EventCard from "./EventCard";
import Counter from "../../counter/Counter";
import { setEvents } from "../eventSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/stores/store";

export default function EventDashboard() {
  const dispatch = useAppDispatch();
  const {events: appEvents} = useAppSelector((state) => state.event);
  
  useEffect(() => {
     dispatch(setEvents(events));

     return () => {
      dispatch(setEvents([])); // Clear events on unmount
     }

  }, [dispatch]);  

  return (
    <div className="flex flex-row w-full gap-6">
      <div className="w-3/5">
        <div className="flex flex-col gap-4">
          {appEvents.map((event) => (
              <EventCard 
              key={event.id} 
              event={event} 
              />
            ))
          }
          </div>  
      </div>
      <div className="w-2/5 overflow-hidden">
        <Counter />
      </div>
    </div>
  )
}
