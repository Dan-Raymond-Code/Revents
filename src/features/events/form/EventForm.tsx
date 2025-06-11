type Props = {
  setFormOpen: (open: boolean) => void;
}

export default function EventForm({setFormOpen}: Props) {
  
  return (
    <div className="card bg-base-100 p-4 flex flex-col gap-3 w-full">
        <h2 className="text-2xl font-semibold text-center text-primary">Create New Event</h2>
        <form className="flex flex-col gap-3 w-full">
            <input type="text" className="input input-lg w-full" placeholder="Event title" />
            <input type="text" className="input input-lg w-full" placeholder="Category" />            
            <textarea className="textarea textarea-lg w-full" placeholder="Description" />
              <input type="text" className="input input-lg w-full" placeholder="Date" />
              <input type="text" className="input input-lg w-full" placeholder="City" />
              <input type="text" className="input input-lg w-full" placeholder="Venue" />
              <div className="flex justify-end w-full gap-3">
                <a onClick={() => setFormOpen(false)} type="button" className="btn btn-neutral">Cancel</a>
                <a type="submit" className="btn btn-primary">Submit</a> 
              </div>
        </form>
    </div>
  )
}