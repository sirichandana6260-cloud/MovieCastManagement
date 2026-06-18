function ScheduleTable({ scheduleList, handleDeleteSchedule }) {
  return (
    <div className="schedule-table">
      <h2>Shooting Schedule List</h2>

      <table>
        <thead>
          <tr>
            <th>Scene</th>
            <th>Date</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {scheduleList.length === 0 ? (
            <tr>
              <td colSpan="4">No schedules added</td>
            </tr>
          ) : (
            scheduleList.map((schedule, index) => (
              <tr key={index}>
                <td>{schedule.scene}</td>
                <td>{schedule.date}</td>
                <td>{schedule.location}</td>
                <td>
                  <button onClick={() => handleDeleteSchedule(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleTable;