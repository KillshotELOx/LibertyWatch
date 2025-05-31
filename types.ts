import { AmendmentKey } from './constants';

export interface IncidentReport {
  id: string;
  title: string;
  dateOfIncident: string;
  location: string;
  involvedParties: string;
  description: string;
  violatedAmendments: AmendmentKey[];
  otherAmendmentDescription?: string;
  evidenceSummary: string;
  contactEmail?: string;
  status: 'Submitted' | 'Under Review' | 'Escalated' | 'Closed';
  submissionTimestamp: number;
}

export interface RightsInfo {
  id: string;
  title: string;
  summary: string;
  details: string[]; // Array of paragraphs
  relevantAmendments?: AmendmentKey[];
  icon?: React.ReactNode;
}

export interface NavLinkItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

// Re-export AmendmentKey
export type { AmendmentKey };
