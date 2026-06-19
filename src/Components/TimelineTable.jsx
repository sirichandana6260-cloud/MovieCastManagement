function TimelineTable({ timelineList, handleDeleteTimeline }) {
  return (
    <div className="timeline-table">
      <h2>Production Timeline</h2>

      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {timelineList.length === 0 ? (
            <tr>
              <td colSpan="5">No stages added</td>
            </tr>
          ) : (
            timelineList.map((item, index) => (
              <tr key={index}>
                <td>{item.stage}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>{item.status}</td>
                <td>
                  <button onClick={() => handleDeleteTimeline(index)}>
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

export default TimelineTable;
