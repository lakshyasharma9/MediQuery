// src/components/Timeline/Timeline.jsx
import { useState } from 'react';
import './Timeline.css';

const Timeline = () => {
  const [timelineData] = useState([
    {
      id: 1,
      date: "15 Mar 2024",
      time: "10:30 AM",
      type: "Appointment",
      title: "General Checkup",
      doctor: "Dr. Sarah Smith",
      details: "Regular health checkup and blood pressure monitoring",
      status: "upcoming"
    },
    {
      id: 2,
      date: "25 Mar 2024",
      time: "2:45 PM",
      type: "Test Results",
      title: "Blood Test Results",
      doctor: "Dr. Michael Chen",
      details: "All parameters within normal range",
      status: "completed"
    },
    {
      id: 3,
      date: "15 Apr 2024",
      time: "11:00 AM",
      type: "Vaccination",
      title: "COVID-19 Booster",
      doctor: "Dr. Emily Wilson",
      details: "Booster shot administered",
      status: "completed"
    },
    {
      id: 4,
      date: "30 Apr 2024",
      time: "3:15 PM",
      type: "Prescription",
      title: "Medication Review",
      doctor: "Dr. Sarah Smith",
      details: "Prescription renewed for 3 months",
      status: "completed"
    }
  ]);

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h2>Medical Timeline</h2>
        <div className="timeline-filters">
          <select className="filter-select">
            <option value="all">All Events</option>
            <option value="appointments">Appointments</option>
            <option value="tests">Test Results</option>
            <option value="prescriptions">Prescriptions</option>
          </select>
        </div>
      </div>

      <div className="timeline">
        {timelineData.map((event) => (
          <div key={event.id} className="timeline-event">
            <div className="event-date">
              <div className="date">{event.date}</div>
              <div className="time">{event.time}</div>
            </div>

            <div className="event-connector">
              <div className={`event-dot ${event.status}`}></div>
              <div className="connector-line"></div>
            </div>

            <div className="event-content">
              <div className="event-header">
                <span className={`event-type ${event.type.toLowerCase()}`}>
                  {event.type}
                </span>
                <span className={`event-status ${event.status}`}>
                  {event.status}
                </span>
              </div>

              <h3 className="event-title">{event.title}</h3>
              
              <div className="event-doctor">
                <span className="doctor-name">{event.doctor}</span>
              </div>

              <p className="event-details">{event.details}</p>

              <div className="event-actions">
                <button className="action-button">View Details</button>
                {event.type === "Test Results" && (
                  <button className="action-button">Download Report</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;