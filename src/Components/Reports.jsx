import { useState, useEffect } from "react";
import "./Reports.css";

function Reports() {
  const [report, setReport] = useState({
    castCount: 0,
    scheduleCount: 0,
    budgetCount: 0,
    timelineCount: 0,
    totalBudget: 0,
    totalExpense: 0,
  });

  useEffect(() => {
    const cast =
      JSON.parse(localStorage.getItem("cast")) || [];

    const schedule =
      JSON.parse(localStorage.getItem("schedule")) || [];

    const budget =
      JSON.parse(localStorage.getItem("budget")) || [];

    const timeline =
      JSON.parse(localStorage.getItem("timeline")) || [];

    const budgetTotal = budget.reduce(
      (total, item) => total + item.budget,
      0
    );

    const expenseTotal = budget.reduce(
      (total, item) => total + item.expense,
      0
    );

    setReport({
      castCount: cast.length,
      scheduleCount: schedule.length,
      budgetCount: budget.length,
      timelineCount: timeline.length,
      totalBudget: budgetTotal,
      totalExpense: expenseTotal,
    });
  }, []);

  return (
    <div className="reports-container">
      <h1>📊 Production Reports</h1>

      <div className="report-cards">

        <div className="report-card">
          <h2>🎭 Cast Report</h2>
          <p>Total Cast Members: {report.castCount}</p>
        </div>

        <div className="report-card">
          <h2>🎬 Schedule Report</h2>
          <p>Total Schedules: {report.scheduleCount}</p>
        </div>

        <div className="report-card">
          <h2>💰 Budget Report</h2>
          <p>Total Departments: {report.budgetCount}</p>
          <p>Total Budget: ₹{report.totalBudget}</p>
          <p>Total Expense: ₹{report.totalExpense}</p>
        </div>

        <div className="report-card">
          <h2>⏳ Timeline Report</h2>
          <p>Total Stages: {report.timelineCount}</p>
        </div>

      </div>
    </div>
  );
}

export default Reports;