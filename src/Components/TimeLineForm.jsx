function TimeLineForm({
  stage,
  startDate,
  endDate,
  status,
  setStage,
  setStartDate,
  setEndDate,
  setStatus,
  handleAddTimeline,
}) {
  return (
    <div className="timeline-form">
      <h2>Add Production Stage</h2>

      <input
        type="text"
        placeholder="Enter Production Stage"
        value={stage}
        onChange={(e) => setStage(e.target.value)}
      />

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="Completed">Completed</option>
        <option value="In Progress">In Progress</option>
        <option value="Pending">Pending</option>
      </select>

      <button onClick={handleAddTimeline}>
        Add Stage
      </button>
    </div>
  );
}

export default TimeLineForm;