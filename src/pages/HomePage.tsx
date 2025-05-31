import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to LibertyWatch</h1>
        <p className="text-xl text-gray-600">Empowering citizens through transparency and accountability</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Link to="/report-incident" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Report an Incident</h2>
          <p className="text-gray-600">Document and report incidents to help ensure accountability.</p>
        </Link>

        <Link to="/know-your-rights" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Know Your Rights</h2>
          <p className="text-gray-600">Learn about your constitutional rights and legal protections.</p>
        </Link>

        <Link to="/dashboard" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">View Dashboard</h2>
          <p className="text-gray-600">Explore incident data and community insights.</p>
        </Link>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Community Resources</h2>
          <p className="text-gray-600">Access helpful resources and community support.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
