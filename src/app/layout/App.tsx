import EventDashboard from "../../features/events/dashboard/EventDashboard"

function App() {
  return (
    <div className="bg-green-200 w-screen">
      <h1 className="text-blue-500 font-semibold text-6xl p-5 mb-2.5">Revents App</h1>
      <button className="btn btn-primary ml-3">
        Click Me
        </button>
      <EventDashboard />
    </div>
  )
}

export default App
 