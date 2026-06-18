import { useState, useEffect } from "react";
import CastForm from "./CastForm";
import CastTable from "./CastTable";
import "./CastManagement.css";

function CastManagement() {
  
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");

  
  const [castList, setCastList] = useState(() => {
    const savedCast = localStorage.getItem("cast");
    return savedCast ? JSON.parse(savedCast) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("cast", JSON.stringify(castList));
  }, [castList]);

  
  function handleAddCast() {
    if (name === "" || role === "" || experience === "") {
      alert("Please fill all fields");
      return;
    }

    const newMember = {
      name: name,
      role: role,
      experience: experience,
    };

    setCastList([...castList, newMember]);

   
    setName("");
    setRole("");
    setExperience("");
  }

 
  function handleDeleteCast(index) {
    const updatedList = castList.filter((_, i) => i !== index);
    setCastList(updatedList);
  }

  return (
    <div className="cast-container">
      <h1>🎭 Cast Management</h1>

      <CastForm
        name={name}
        role={role}
        experience={experience}
        setName={setName}
        setRole={setRole}
        setExperience={setExperience}
        handleAddCast={handleAddCast}
      />

      <CastTable
        castList={castList}
        handleDeleteCast={handleDeleteCast}
      />
    </div>
  );
}

export default CastManagement;