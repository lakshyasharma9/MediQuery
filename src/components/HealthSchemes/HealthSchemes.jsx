// src/components/HealthSchemes/HealthSchemes.jsx
import { useState } from 'react';
import './HealthSchemes.css';

const HealthSchemes = () => {
  const [schemes] = useState([
    {
      id: 1,
      name: "Ayushman Bharat",
      category: "Government",
      coverage: "₹5 Lakhs per family per year",
      description: "Comprehensive healthcare coverage for eligible families",
      benefits: [
        "Cashless treatment",
        "Secondary and tertiary care coverage",
        "Pan-India portability",
        "No cap on family size"
      ],
      eligibility: "Based on SECC database criteria",
      status: "Active"
    },
    {
      id: 2,
      name: "CGHS",
      category: "Government",
      coverage: "Full Coverage as per CGHS rates",
      description: "Healthcare scheme for central government employees",
      benefits: [
        "OPD and IPD coverage",
        "Lifetime coverage for pensioners",
        "Family coverage",
        "Wellness center facilities"
      ],
      eligibility: "Central government employees and pensioners",
      status: "Active"
    },
    {
      id: 3,
      name: "State Health Insurance",
      category: "State",
      coverage: "₹2 Lakhs per family per year",
      description: "State-specific health coverage scheme",
      benefits: [
        "Cashless treatment in network hospitals",
        "Pre-existing disease coverage",
        "No age limit",
        "Annual health checkup"
      ],
      eligibility: "State residents meeting criteria",
      status: "Active"
    }
  ]);

  return (
    <div className="schemes-container">
      <div className="schemes-header">
        <h2>Healthcare Schemes</h2>
        <div className="search-filter">
          <input 
            type="text" 
            placeholder="Search schemes..."
            className="search-input"
          />
          <select className="filter-select">
            <option value="all">All Categories</option>
            <option value="government">Government</option>
            <option value="state">State</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>

      <div className="schemes-grid">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="scheme-card">
            <div className="scheme-header">
              <h3>{scheme.name}</h3>
              <span className={`status-badge ${scheme.status.toLowerCase()}`}>
                {scheme.status}
              </span>
            </div>

            <div className="scheme-category">
              {scheme.category}
            </div>

            <div className="scheme-coverage">
              <h4>Coverage</h4>
              <p>{scheme.coverage}</p>
            </div>

            <div className="scheme-description">
              <p>{scheme.description}</p>
            </div>

            <div className="scheme-benefits">
              <h4>Key Benefits</h4>
              <ul>
                {scheme.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="scheme-eligibility">
              <h4>Eligibility</h4>
              <p>{scheme.eligibility}</p>
            </div>

            <div className="scheme-actions">
              <button className="check-btn">Check Eligibility</button>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className="schemes-footer">
        <p>Need help understanding these schemes? Contact our support team</p>
        <button className="support-btn">Contact Support</button>
      </div>
    </div>
  );
};

export default HealthSchemes;
