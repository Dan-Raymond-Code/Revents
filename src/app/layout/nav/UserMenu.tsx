import { users } from "../../../lib/data/sampleData";
import { CalendarIcon, PowerIcon, UserIcon } from "@heroicons/react/24/outline";

export default function UserMenu() {
  return (
      <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" 
            className="m-1 text-white text-xl font-semibold flex items-center gap-2 cursor-pointer">
            <div className="avatar">
                <div className="w-11 rounded-full">
                    <img src={users[0].photoURL} alt="User Avatar" />
                </div>
            </div>
            <span>Bob</span>
          </div>
          
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <div className="flex items-center gap-3">
                    <UserIcon className="size-6" />
                    My Profile
                </div>
              </li>
              <li>
                  <div className="flex items-center gap-3">
                      <CalendarIcon className="size-6" />
                      Create Event
                  </div>
              </li>
              <div className="divider my-0"></div>
              <li>
                  <div className="flex items-center gap-3">
                      <PowerIcon className="size-6 text-error" />
                      Create Event
                  </div>
              </li>
          </ul>
      </div>
  )
}