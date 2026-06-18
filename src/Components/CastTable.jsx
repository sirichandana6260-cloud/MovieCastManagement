function CastTable({ castList, handleDeleteCast }) {
  return (
    <div className="cast-table">
      <h2>Cast Members</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {castList.length === 0 ? (
            <tr>
              <td colSpan="4">No cast members added</td>
            </tr>
          ) : (
            castList.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.experience}</td>
                <td>
                  <button onClick={() => handleDeleteCast(index)}>
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

export default CastTable;