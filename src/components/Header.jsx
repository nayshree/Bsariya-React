import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTeamClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('team_section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('team_section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
<header className="header_section" id="site-header">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
            <img src="images/img/final_logo.png" alt="" className="img-fluid"/>
        </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
              <li className="nav-item"><a className="nav-link" href="#team_section" onClick={handleTeamClick} style={{cursor: 'pointer'}}>Our Team</a></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
          </ul>
      </div>
    </nav>
  </div>
</header>
  )
}

