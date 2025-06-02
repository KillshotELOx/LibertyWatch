import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IncidentReport } from '@/types';
import { MOCK_INCIDENTS_KEY } from '@/constants';

const DashboardPage: React.FC = () => {
  const [reports, setReports] = useState<IncidentReport[]>([]);
  const location = useLocation();

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem(MOCK_INCIDENTS_KEY) || '[]');
    setReports(storedReports);
  }, []);

  const statusCounts = reports.reduce((acc, report) => {
    acc[report.status] = (acc[report.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const amendmentCounts = reports.reduce((acc, report) => {
    report.violatedAmendments.forEach(amendment => {
      acc[amendment] = (acc[amendment] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="max-w-6xl mx-auto">
      {location.state?.message && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
          {location.state.message}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">Incident Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Reports</h3>
          <p className="text-3xl font-bold text-liberty-blue">{reports.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Active Cases</h3>
          <p className="text-3xl font-bold text-liberty-blue-light">
            {(statusCounts['Under Review'] || 0) + (statusCounts['Escalated'] || 0)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Resolved Cases</h3>
          <p className="text-3xl font-bold text-liberty-blue-dark">{statusCounts['Closed'] || 0}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Reports</h2>
        {reports.length === 0 ? (
          <div className="text-gray-500 text-center py-8">
            No reports available yet
          </div>
        ) : (
          <div className="space-y-4">
            {reports.map(report => (
              <div key={report.id} className="border p-4 rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{report.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    report.status === 'Submitted' ? 'bg-blue-100 text-blue-800' :
                    report.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                    report.status === 'Escalated' ? 'bg-red-100 text-red-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {new Date(report.dateOfIncident).toLocaleDateString()} - {report.location}
                </p>
                <p className="text-gray-700">{report.description.slice(0, 200)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Amendment Violations</h2>
          {Object.keys(amendmentCounts).length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              No data available yet
            </div>
          ) : (
            <div className="space-y-2">
              {Object.entries(amendmentCounts).map(([amendment, count]) => (
                <div key={amendment} className="flex justify-between items-center">
                  <span className="text-gray-700">{amendment}</span>
                  <span className="font-semibold">{count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Case Status Distribution</h2>
          {Object.keys(statusCounts).length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              No data available yet
            </div>
          ) : (
            <div className="space-y-2">
              {Object.entries(statusCounts).map(([status, count]) => (
                <div key={status} className="flex justify-between items-center">
                  <span className="text-gray-700">{status}</span>
                  <span className="font-semibold">{count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
