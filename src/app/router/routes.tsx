import { createBrowserRouter } from "react-router";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import EventForm from "../../features/events/form/EventForm";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import EventDetails from "../../features/events/details/EventDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '/', element: <HomePage /> },        
            { path: 'events', element: <EventDashboard /> },
            { path: 'events/:id', element: <EventDetails /> },
            { path: 'manage/:id', element: <EventForm /> },
            { path: 'createEvent', element: <EventForm /> },
        ]
    }
]);