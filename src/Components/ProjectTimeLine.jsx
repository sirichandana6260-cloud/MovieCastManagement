import { useState, useEffect } from "react";
import TimeLineForm from "./TimeLineForm";
import TimelineTable from "./TimeLineTable";
import "./ProjectTimeLine.css";

function ProjectTimeLine() {
  const [stage, setStage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  
  const [timelineList, setTimelineList] = useState(() => {
    const savedData = localStorage.getItem("timeline");
    return savedData ? JSON.parse(savedData) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(timelineList));
  }, [timelineList]);

  
  function handleAddTimeline() {
    if (
      stage === "" ||
      startDate === "" ||
      endDate === "" ||
      status === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newStage = {
      stage,
      startDate,
      endDate,
      status,
    };

    setTimelineList([...timelineList, newStage]);

   
    setStage("");
    setStartDate("");
    setEndDate("");
    setStatus("");
  }

  
  function handleDeleteTimeline(index) {
    const updatedList = timelineList.filter((_, i) => i !== index);
    setTimelineList(updatedList);
  }

  return (
    <div className="timeline-container">
      <h1>⏳ Project Timeline</h1>

      <TimeLineForm
        stage={stage}
        startDate={startDate}
        endDate={endDate}
        status={status}
        setStage={setStage}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setStatus={setStatus}
        handleAddTimeline={handleAddTimeline}
      />

      <TimelineTable
        timelineList={timelineList}
        handleDeleteTimeline={handleDeleteTimeline}
      />
    </div>
  );
}

export default ProjectTimeLine;
