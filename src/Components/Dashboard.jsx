import "./Dashboard.css";
import movieImg from "../assets/Movie.jpg";

function Dashboard() {
  return (
    <div className="dashboard">

     
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${movieImg})` }}
      ></div>

      
      <div className="content">

        <h1>🎬 Movie Production Management System</h1>

        <p>
          Manage your complete movie production process from a single dashboard.
        </p>

        <div className="cards">
          <div className="card">
            <h3>🎭 Cast Management</h3>
            <p>Manage actors, directors, and crew details.</p>
          </div>

          <div className="card">
            <h3>📅 Shooting Schedule</h3>
            <p>Plan and track shooting dates and locations.</p>
          </div>

          <div className="card">
            <h3>💰 Budget Tracking</h3>
            <p>Monitor production expenses and budget limits.</p>
          </div>

          <div className="card">
            <h3>⏳ Project Timeline</h3>
            <p>Track milestones and production progress.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;