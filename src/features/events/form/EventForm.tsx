import { users } from "../../../lib/data/sampleData";
import type { AppEvent } from "../../../lib/types";

type Props = {
  setFormOpen: (open: boolean) => void;
  createEvent: (event: AppEvent) => void;
  selectedEvent: AppEvent | null;
  updateEvent: (event: AppEvent) => void;
}

export default function EventForm({setFormOpen, createEvent, selectedEvent, updateEvent}: Props) {

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  }
  // const onSubmit = (formData: FormData) => {
  //   console.log(formData);

  //   const data = Object.fromEntries(formData.entries());
  //   console.log(data);
  // }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as AppEvent;
    //console.log(data);

    if (selectedEvent) {
      // If an event is selected, update it
      updateEvent({
        ...selectedEvent,
        ...data
      });
    }
    else {
      createEvent({
          ...data, // Spread the data to match AppEvent type
          id: crypto.randomUUID(), 
          hostUid: users[0].uid,
          attendees: [{
            id: users[0].uid,
            displayName: users[0].displayName,
            photoURL: users[0].photoURL,
            isHost: true,  
          }], 
        }); 
    }

    setFormOpen(false); // Close the form after submission      
    return;
  }

  return (  
    <div className="card bg-base-100 p-4 flex flex-col gap-3 w-full">
        <h2 className="text-2xl font-semibold text-center text-primary">{selectedEvent ? 'Edit Event' : 'Create Event'}</h2>
        <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3 w-full">
        <input type="text" defaultValue={initialValues.title} name='title' className="input input-lg w-full" placeholder="Event title" />
        <input type="text" defaultValue={initialValues.category} name='category' className="input input-lg w-full" placeholder="Category" />            
        <textarea name='description' defaultValue={initialValues.description} className="textarea textarea-lg w-full" placeholder="Description" />
        <input type="datetime-local" defaultValue={initialValues.date ? new Date(initialValues.date).toISOString().slice(0,16) : ''} name='date' className="input input-lg w-full" placeholder="Date" />
        <input type="text" defaultValue={initialValues.city} name='city' className="input input-lg w-full" placeholder="City" />
        <input type="text" defaultValue={initialValues.venue} name='venue' className="input input-lg w-full" placeholder="Venue" />
              <div className="flex justify-end w-full gap-3">
                <a onClick={() => setFormOpen(false)} type="button" className="btn btn-neutral">Cancel</a>
                <button type="submit" className="btn btn-primary">Submit</button> 
              </div>
        </form>
    </div>
  )
}