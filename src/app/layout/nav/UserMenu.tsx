import { CalendarIcon, PowerIcon, UserIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../../../lib/stores/store";
import { signOut } from "../../../features/account/accountSlice";
import { useNavigate } from "react-router";

export default function UserMenu() {

    const user = useAppSelector(state => state.account.user);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(signOut());
        navigate('/');
    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button"
                className="m-1 text-white text-xl font-semibold flex items-center gap-2 cursor-pointer">
                <div className="avatar">
                    <div className="w-11 rounded-full">
                        <img src={user?.photoURL || '/user.png'} alt="User Avatar" />
                    </div>
                </div>
                <span>{user?.displayName}</span>
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
                <li onClick={handleSignOut}>
                    <div className="flex items-center gap-3">
                        <PowerIcon className="size-6 text-error" />
                        Sign Out
                    </div>
                </li>
            </ul>
        </div>
    )
}