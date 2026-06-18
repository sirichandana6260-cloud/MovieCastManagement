import { useState, useEffect } from "react";
import ScheduleForm from "./ScheduleForm";
import ScheduleTable from "./ScheduleTable";
import "./ShootingSchedule.css";

function ShootingSchedule() {
  
  const [scene, setScene] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");


  const [scheduleList, setScheduleList] = useState(() => {
    const savedData = localStorage.getItem("schedule");
    return savedData ? JSON.parse(savedData) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(scheduleList));
  }, [scheduleList]);

  
  function handleAddSchedule() {
    if (scene === "" || date === "" || location === "") {
      alert("Please fill all fields");
      return;
    }

    const newSchedule = {
      scene: scene,
      date: date,
      location: location,
    };

    setScheduleList([...scheduleList, newSchedule]);

   
    setScene("");
    setDate("");
    setLocation("");
  }

  
  function handleDeleteSchedule(index) {
    const updatedList = scheduleList.filter((_, i) => i !== index);
    setScheduleList(updatedList);
  }

  return (
    <div className="schedule-container">
      <h1>🎬 Shooting Schedule</h1>

      <ScheduleForm
        scene={scene}
        date={date}
        location={location}
        setScene={setScene}
        setDate={setDate}
        setLocation={setLocation}
        handleAddSchedule={handleAddSchedule}
      />

      <ScheduleTable
        scheduleList={scheduleList}
        handleDeleteSchedule={handleDeleteSchedule}
      />
    </div>
  );
}

export default ShootingSchedule;