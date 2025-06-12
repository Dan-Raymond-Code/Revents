import { useState } from "react";
import EventDashboard from "../../features/events/dashboard/EventDashboard"
import Navbar from "./nav/Navbar"
import type { AppEvent } from "../../lib/types";

function App() {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);
  
  const handleFormToggle = (event: AppEvent | null) => {
    if (formOpen) {
      setFormOpen(false); // Close the form if it's already open
      setTimeout(() => {
        setSelectedEvent(event);
        setFormOpen(true); // Reopen the form with the selected event
      }, 300); // Delay to allow the form to close before reopening
    } else {
      setSelectedEvent(event);
      setFormOpen(true); // Open the form when an event is selected     
    }
  }

  return (
    <div>
      <Navbar formToggle={handleFormToggle} />
      <div className="container w-full mx-auto px-10 mt-24">
        <EventDashboard 
          formOpen={formOpen} 
          setFormOpen={setFormOpen}
          formToggle={handleFormToggle} 
          selectedEvent={selectedEvent} />
      </div>
    </div>
  )
}

export default App;
 