// src/components/Navbar/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/health-card', label: 'Health Card' },
    { path: '/chat', label: 'Chat' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/schemes', label: 'Schemes' }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      // Handle PDF file upload
      console.log('Uploaded file:', file.name);
    } else {
      alert('Please upload a PDF file');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">MediQuery</Link>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <label className="upload-btn">
            Upload Report
            <input 
              type="file" 
              accept=".pdf"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </label>
        </div>

        <div className="user-menu">
          <div className="user-avatar">JD</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;