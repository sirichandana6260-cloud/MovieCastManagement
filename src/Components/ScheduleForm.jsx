function ScheduleForm({
  scene,
  date,
  location,
  setScene,
  setDate,
  setLocation,
  handleAddSchedule,
}) {
  return (
    <div className="schedule-form">
      <h2>Add Shooting Schedule</h2>

      <input
        type="text"
        placeholder="Enter Scene Name"
        value={scene}
        onChange={(e) => setScene(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button onClick={handleAddSchedule}>
        Add Schedule
      </button>
    </div>
  );
}

export default ScheduleForm;