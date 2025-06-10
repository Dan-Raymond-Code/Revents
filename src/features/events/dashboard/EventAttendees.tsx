export default function EventAttendees() {
  return (
    <div className="avatar-group -space-x-5">
        {Array.from({ length: 5 }).map((_, index) => (  
          <div className="avatar" key={index}>
            <div className="w-12">
                <img src={"https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"} alt={`Attendee avatar ${index + 1}`} />
            </div>
          </div>
        ))}
    </div>
  )
}