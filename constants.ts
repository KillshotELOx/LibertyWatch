
import { RightsInfo } from './types';

export enum Amendment {
  FIRST = "First Amendment (Freedom of Speech, Religion, Press, Assembly, Petition)",
  FOURTH = "Fourth Amendment (Protection against Unreasonable Searches and Seizures)",
  FIFTH = "Fifth Amendment (Due Process, Self-Incrimination, Double Jeopardy)",
  SIXTH = "Sixth Amendment (Right to a Speedy and Public Trial, Right to Counsel)",
  EIGHTH = "Eighth Amendment (Protection against Cruel and Unusual Punishments, Excessive Bail)",
  FOURTEENTH = "Fourteenth Amendment (Due Process, Equal Protection)",
  OTHER = "Other (Please specify)",
}

export type AmendmentKey = keyof typeof Amendment;

export const AMENDMENT_OPTIONS: Array<{ id: AmendmentKey; label: string }> = (Object.keys(Amendment) as AmendmentKey[]).map(key => ({
  id: key,
  label: Amendment[key],
}));

export const MOCK_INCIDENTS_KEY = 'libertyWatchMockIncidents';

// Example structure for "Know Your Rights" data
export const KNOW_YOUR_RIGHTS_DATA: RightsInfo[] = [
  {
    id: 'fourth_amendment',
    title: 'Fourth Amendment: Searches & Seizures',
    summary: 'Protects against unreasonable searches and seizures by the government.',
    details: [
      "Generally, law enforcement needs a warrant based on probable cause to search you or your property.",
      "There are exceptions, such as searches incident to a lawful arrest, consent searches, or plain view doctrine.",
      "If you believe your Fourth Amendment rights were violated, document everything and consult an attorney."
    ],
    relevantAmendments: ['FOURTH'] as AmendmentKey[],
  },
  {
    id: 'fifth_amendment',
    title: 'Fifth Amendment: Due Process & Self-Incrimination',
    summary: 'Guarantees due process of law and protects against self-incrimination (the "right to remain silent").',
    details: [
      "You cannot be compelled to be a witness against yourself in a criminal case.",
      "You have the right to due process before being deprived of life, liberty, or property.",
      "This amendment also covers protection against double jeopardy (being tried twice for the same crime)."
    ],
    relevantAmendments: ['FIFTH'] as AmendmentKey[],
  },
  {
    id: 'first_amendment',
    title: 'First Amendment: Freedoms',
    summary: 'Protects freedoms of speech, religion, the press, assembly, and to petition the government.',
    details: [
        "These freedoms are fundamental but not absolute; there are certain limitations (e.g., incitement to violence).",
        "This amendment ensures citizens can express dissent and hold the government accountable.",
    ],
    relevantAmendments: ['FIRST'] as AmendmentKey[],
  },
    {
    id: 'eighth_amendment',
    title: 'Eighth Amendment: Cruel & Unusual Punishment',
    summary: 'Prohibits cruel and unusual punishments, as well as excessive bail and fines.',
    details: [
        "This applies to conditions of confinement in jails and prisons.",
        "What constitutes 'cruel and unusual' can evolve with societal standards.",
    ],
    relevantAmendments: ['EIGHTH'] as AmendmentKey[],
  },
];
