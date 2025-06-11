import type { Attendee } from "../../../lib/types";

type Props = {
  attendees: Attendee[];
}

export default function EventAttendees({attendees}: Props) {
  
  return (
    <div className="avatar-group -space-x-5">
        {attendees.map((attendee) => (  
          <div className="avatar" key={attendee.id}>
            <div className="w-10 rounded-full">
                <img src={attendee.photoURL || './user.png'} />
            </div>
          </div>
        ))}
    </div>
  )
}