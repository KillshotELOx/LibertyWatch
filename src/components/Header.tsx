import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="p-4 bg-liberty-blue text-white">
    <div className="container mx-auto">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">LibertyWatch</Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/report-incident" className="hover:text-gray-300">Report Incident</Link>
          <Link to="/know-your-rights" className="hover:text-gray-300">Know Your Rights</Link>
          <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
