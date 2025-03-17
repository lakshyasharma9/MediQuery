// src/components/Dashboard/Dashboard.jsx
import { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [healthData] = useState({
    // Basic Health Data
    healthScore: 85,
    nextMedication: "2:30 PM",
    nextAppointment: "Mar 15",

    // Recent Activity
    recentActivity: [
      { type: "Medication", time: "9:00 AM", description: "Blood Pressure Medicine" },
      { type: "Checkup", time: "Yesterday", description: "General Health Checkup" },
      { type: "Test Results", time: "2 days ago", description: "Blood Test Results" }
    ],

    // Blood Pressure Data
    bloodPressure: [
      { date: 'Jan', systolic: 120, diastolic: 80 },
      { date: 'Feb', systolic: 125, diastolic: 82 },
      { date: 'Mar', systolic: 118, diastolic: 79 }
    ],

    // Temperature Data
    temperatureData: [
      { day: 'Mon', temp: 98.6 },
      { day: 'Tue', temp: 99.1 },
      { day: 'Wed', temp: 101.2 },
      { day: 'Thu', temp: 100.8 },
      { day: 'Fri', temp: 99.4 },
      { day: 'Sat', temp: 98.8 },
      { day: 'Sun', temp: 98.6 }
    ],

    // Stress Level Data (New)
    stressLevel: {
      current: 45,
      status: "Moderate"
    },

    // Symptom Tracking
    symptomData: [
      { name: 'Headache', frequency: 3, severity: 2 },
      { name: 'Fever', frequency: 2, severity: 3 },
      { name: 'Cough', frequency: 4, severity: 1 },
      { name: 'Fatigue', frequency: 3, severity: 2 }
    ],

    // Recovery Progress
    recoveryProgress: [
      { date: 'Mon', progress: 60 },
      { date: 'Tue', progress: 65 },
      { date: 'Wed', progress: 70 },
      { date: 'Thu', progress: 75 },
      { date: 'Fri', progress: 80 },
      { date: 'Sat', progress: 85 },
      { date: 'Sun', progress: 90 }
    ],

    // Vital Signs
    vitalSigns: {
      oxygenLevel: 98,
      respiratoryRate: 16,
      temperature: 98.6
    },

    // Medication Schedule
    medicationSchedule: [
      { time: "08:00 AM", medicine: "Paracetamol", dose: "500mg" },
      { time: "02:00 PM", medicine: "Vitamin D", dose: "1000 IU" },
      { time: "09:00 PM", medicine: "Antibiotic", dose: "250mg" }
    ],

    // Diet Recommendations
    dietRecommendations: [
      { meal: "Breakfast", recommendation: "Light porridge, avoid spicy food" },
      { meal: "Lunch", recommendation: "Steamed vegetables, lean protein" },
      { meal: "Dinner", recommendation: "Soup, easily digestible foods" }
    ],

    // Health Score Breakdown
    healthScoreBreakdown: [
      { name: 'Exercise', value: 30 },
      { name: 'Diet', value: 25 },
      { name: 'Sleep', value: 20 },
      { name: 'Medication', value: 25 }
    ]
  });

  // Helper function for stress level color
  const getStressLevelColor = (level) => {
    if (level <= 30) return 'text-green';
    if (level <= 70) return 'text-orange';
    return 'text-red';
  };

  return (
    <div className="dashboard">
      {/* Vital Signs Stats */}
      <div className="stats-container vital-signs">
        <div className="stat-card">
          <h3>Oxygen Level</h3>
          <div className="stat-value text-blue">{healthData.vitalSigns.oxygenLevel}%</div>
          <div className="stat-label">SpO2</div>
        </div>
        
        <div className="stat-card">
          <h3>Stress Level</h3>
          <div className={`stat-value ${getStressLevelColor(healthData.stressLevel.current)}`}>
            {healthData.stressLevel.current}%
          </div>
          <div className="stat-label">{healthData.stressLevel.status}</div>
        </div>

        <div className="stat-card">
          <h3>Temperature</h3>
          <div className="stat-value text-orange">{healthData.vitalSigns.temperature}°F</div>
          <div className="stat-label">Current</div>
        </div>

        <div className="stat-card">
          <h3>Health Score</h3>
          <div className="stat-value text-green">{healthData.healthScore}%</div>
          <div className="stat-label">Overall Wellness</div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="analytics-section">
        {/* Temperature Chart */}
        <div className="analytics-card">
          <h2>Temperature Tracking</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={healthData.temperatureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis domain={[97, 103]} />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#ff7c43" 
                  fill="#ff7c43" 
                  fillOpacity={0.3} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Blood Pressure Chart */}
        <div className="analytics-card">
          <h2>Blood Pressure Trends</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healthData.bloodPressure}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="systolic" 
                  stroke="#3B82F6" 
                  name="Systolic"
                />
                <Line 
                  type="monotone" 
                  dataKey="diastolic" 
                  stroke="#10B981" 
                  name="Diastolic"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Symptom Analysis */}
        <div className="dashboard-card">
          <h2>Symptom Analysis</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={healthData.symptomData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar 
                  name="Frequency" 
                  dataKey="frequency" 
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.6} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Health Score Breakdown */}
        <div className="dashboard-card">
          <h2>Health Score Breakdown</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie 
                  data={healthData.healthScoreBreakdown} 
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#3B82F6"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recovery Progress */}
        <div className="dashboard-card">
          <h2>Recovery Progress</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healthData.recoveryProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="progress" 
                  stroke="#4CAF50" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Medication Schedule */}
        <div className="dashboard-card">
          <h2>Today's Medication</h2>
          <div className="medication-list">
            {healthData.medicationSchedule.map((med, index) => (
              <div key={index} className="medication-item">
                <div className="medication-time">{med.time}</div>
                <div className="medication-details">
                  <div className="medication-name">{med.medicine}</div>
                  <div className="medication-dose">{med.dose}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-card">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {healthData.recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-type">{activity.type}</div>
                <div className="activity-details">
                  <div className="activity-description">
                    {activity.description}
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diet Recommendations */}
        <div className="dashboard-card">
          <h2>Diet Recommendations</h2>
          <div className="diet-list">
            {healthData.dietRecommendations.map((diet, index) => (
              <div key={index} className="diet-item">
                <div className="diet-meal">{diet.meal}</div>
                <div className="diet-recommendation">
                  {diet.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;