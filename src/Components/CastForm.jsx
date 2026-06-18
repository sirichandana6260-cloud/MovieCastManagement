function CastForm({
  name,
  role,
  experience,
  setName,
  setRole,
  setExperience,
  handleAddCast,
}) {
  return (
    <div className="cast-form">
      <h2>Add Cast Member</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />

      <button onClick={handleAddCast}>
        Add Cast
      </button>
    </div>
  );
}

export default CastForm;