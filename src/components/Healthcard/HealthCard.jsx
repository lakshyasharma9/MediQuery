// src/components/HealthCard/HealthCard.jsx
import { useState } from 'react';
import './HealthCard.css';

const HealthCard = () => {
  const [userData] = useState({
    name: "Jasraj Bhavsar",
    id: "MQ-2024-1234",
    bloodGroup: "O+",
    emergencyContact: "+91 98765 43210",
    allergies: ["Penicillin", "Peanuts"],
    primaryDoctor: "Dr. Sarah Smith",
    insuranceNo: "INS-456789",
    lastUpdated: "15 Jan 2024",
    // Added antibiotic resistance data
    antibioticResistance: [
      { antibiotic: "Amoxicillin", status: "Resistant" },
      { antibiotic: "Ciprofloxacin", status: "Sensitive" },
      { antibiotic: "Azithromycin", status: "Intermediate" }
    ]
  });

  return (
    <div className="health-card-container">
      {/* Primary Card - Same as before */}
      <div className="health-card">
        <div className="card-header">
          <div className="card-title">
            <h2>Smart Health Card</h2>
            <p className="card-subtitle">Universal Healthcare Access</p>
          </div>
          <div className="card-qr">
            <img src='/qrscan2.png' alt="QR Code" className="qr-image" />
            <div className="card-logo">MQ</div>
          </div>
        </div>

        <div className="card-body">
          <div className="user-details">
            <h3>{userData.name}</h3>
            <p className="user-id">ID: {userData.id}</p>
          </div>

          <div className="vital-info">
            <div className="info-item">
              <span className="label">Blood Group</span>
              <span className="value">{userData.bloodGroup}</span>
            </div>
            <div className="info-item">
              <span className="label">Emergency Contact</span>
              <span className="value">{userData.emergencyContact}</span>
            </div>
          </div>
        </div>

        <div className="card-footer">
          Last Updated: {userData.lastUpdated}
        </div>
      </div>

      {/* Additional Information */}
      <div className="health-info-section">
        <div className="info-grid">
          <div className="info-card">
            <h3>Medical Allergies</h3>
            <div className="allergy-tags">
              {userData.allergies.map((allergy, index) => (
                <span key={index} className="allergy-tag">{allergy}</span>
              ))}
            </div>
          </div>

          <div className="info-card">
            <h3>Primary Doctor</h3>
            <p className="doctor-info">{userData.primaryDoctor}</p>
            <button className="contact-btn">Contact Doctor</button>
          </div>

          <div className="info-card">
            <h3>Insurance Details</h3>
            <p className="insurance-info">Policy No: {userData.insuranceNo}</p>
            <button className="insurance-btn">View Coverage</button>
          </div>

          <div className="info-card">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <button className="action-btn">Share Card</button>
              <button className="action-btn">Download PDF</button>
              <button className="action-btn emergency">Emergency SOS</button>
            </div>
          </div>

          {/* New Antibiotic Resistance Card */}
          <div className="info-card antibiotic-card">
            <h3>Past Antibiotic Resistance & AST Report</h3>
            <div className="antibiotic-list">
              {userData.antibioticResistance.map((item, index) => (
                <div key={index} className="antibiotic-item">
                  <span className="antibiotic-name">{item.antibiotic}</span>
                  <span className={`resistance-status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="view-report-btn">View Full Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;