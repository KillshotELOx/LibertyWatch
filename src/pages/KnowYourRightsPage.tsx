import React from 'react';

const KnowYourRightsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Know Your Rights</h1>
      
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">First Amendment Rights</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Right to peaceful protest and assembly</li>
            <li>• Freedom of speech and expression</li>
            <li>• Right to record police in public spaces</li>
            <li>• Right to petition the government</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Fourth Amendment Rights</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Protection against unreasonable searches and seizures</li>
            <li>• Requirement for probable cause for arrests</li>
            <li>• Right to refuse consent to search</li>
            <li>• Protection of privacy in your home</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">If Stopped by Law Enforcement</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Stay calm and be respectful</li>
            <li>• You have the right to remain silent</li>
            <li>• You have the right to an attorney</li>
            <li>• Ask if you are free to leave</li>
            <li>• Do not resist arrest, even if you believe it's unlawful</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Legal Resources</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Contact the ACLU: <a href="https://www.aclu.org" className="text-blue-600 hover:underline">www.aclu.org</a></li>
            <li>• National Lawyers Guild: <a href="https://www.nlg.org" className="text-blue-600 hover:underline">www.nlg.org</a></li>
            <li>• Find a Civil Rights Attorney: <a href="#" className="text-blue-600 hover:underline">Legal Directory</a></li>
          </ul>
        </section>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                This information is for educational purposes only and does not constitute legal advice. Consult with a qualified attorney for legal guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowYourRightsPage;
