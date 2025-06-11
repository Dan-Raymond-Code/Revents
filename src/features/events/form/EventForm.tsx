import { users } from "../../../lib/data/sampleData";
import type { AppEvent } from "../../../lib/types";

type Props = {
  setFormOpen: (open: boolean) => void;
  createEvent: (event: AppEvent) => void;
}

export default function EventForm({setFormOpen, createEvent}: Props) {
  // const onSubmit = (formData: FormData) => {
  //   console.log(formData);

  //   const data = Object.fromEntries(formData.entries());
  //   console.log(data);
  // }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as AppEvent;
    console.log(data);
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
    // Reset the form fields
    e.currentTarget.reset();    
    setFormOpen(false); // Close the form after submission      
  }

  return (  
    <div className="card bg-base-100 p-4 flex flex-col gap-3 w-full">
        <h2 className="text-2xl font-semibold text-center text-primary">Create New Event</h2>
        <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3 w-full">
            <input type="text" name='title' className="input input-lg w-full" placeholder="Event title" />
            <input type="text" name='category' className="input input-lg w-full" placeholder="Category" />            
            <textarea name='description' className="textarea textarea-lg w-full" placeholder="Description" />
              <input type="datetime-local" name='date' className="input input-lg w-full" placeholder="Date" />
              <input type="text" name='city' className="input input-lg w-full" placeholder="City" />
              <input type="text" name='venue' className="input input-lg w-full" placeholder="Venue" />
              <div className="flex justify-end w-full gap-3">
                <a onClick={() => setFormOpen(false)} type="button" className="btn btn-neutral">Cancel</a>
                <button type="submit" className="btn btn-primary">Submit</button> 
              </div>
        </form>
    </div>
  )
}