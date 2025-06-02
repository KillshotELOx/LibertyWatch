import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IncidentReport, AmendmentKey } from '@/types';
import { AMENDMENT_OPTIONS, MOCK_INCIDENTS_KEY } from '@/constants';

const ReportIncidentPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<IncidentReport>>({
    title: '',
    dateOfIncident: '',
    location: '',
    involvedParties: '',
    description: '',
    violatedAmendments: [],
    otherAmendmentDescription: '',
    evidenceSummary: '',
    contactEmail: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newReport: IncidentReport = {
      ...formData,
      id: crypto.randomUUID(),
      status: 'Submitted',
      submissionTimestamp: Date.now(),
      violatedAmendments: formData.violatedAmendments || [],
    } as IncidentReport;

    // Store in localStorage for now (in a real app, this would go to a backend)
    const existingReports = JSON.parse(localStorage.getItem(MOCK_INCIDENTS_KEY) || '[]');
    localStorage.setItem(MOCK_INCIDENTS_KEY, JSON.stringify([...existingReports, newReport]));

    // Redirect to dashboard
    navigate('/dashboard', { state: { message: 'Report submitted successfully' } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'violatedAmendments') {
      const select = e.target as HTMLSelectElement;
      const selectedOptions = Array.from(select.selectedOptions).map(option => option.value as AmendmentKey);
      setFormData(prev => ({
        ...prev,
        violatedAmendments: selectedOptions,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Report an Incident</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Brief title describing the incident"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Incident</label>
          <input
            type="datetime-local"
            name="dateOfIncident"
            value={formData.dateOfIncident || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Where did this incident occur?"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Involved Parties</label>
          <input
            type="text"
            name="involvedParties"
            value={formData.involvedParties || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Who was involved in the incident?"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Violated Amendments</label>
          <select
            name="violatedAmendments"
            value={formData.violatedAmendments || []}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            multiple
            required
          >
            {AMENDMENT_OPTIONS.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {formData.violatedAmendments?.includes('OTHER') && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Other Amendment Description</label>
            <textarea
              name="otherAmendmentDescription"
              value={formData.otherAmendmentDescription || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={2}
              placeholder="Please describe the other constitutional rights that were violated"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
            placeholder="Provide a detailed description of what happened..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Evidence Summary</label>
          <textarea
            name="evidenceSummary"
            value={formData.evidenceSummary || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            placeholder="Describe any evidence you have (photos, videos, documents, etc.)"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Email (Optional)</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your email for follow-up (optional)"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-liberty-blue hover:bg-liberty-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-liberty-blue"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportIncidentPage;
