import { Home, UserRound, FileText, FolderCode, Youtube, Mail } from 'lucide-react';
export const navigation = [
  { id: 'Home', label: 'Home', Icon: Home },
  { id: 'About', label: 'About', Icon: UserRound },
  { id: 'Resume', label: 'Resume', Icon: FileText },
  { id: 'Projects', label: 'Projects', mobileLabel: 'Work', Icon: FolderCode },
  { id: 'Youtube', label: 'YouTube', mobileLabel: 'Videos', Icon: Youtube },
  { id: 'Contact', label: 'Contact', Icon: Mail },
];
export const profile = {
  email: 'saikiranpatro198@gmail.com', phone: '+919182863688',
  linkedin: 'https://www.linkedin.com/in/sai-kiran-patro/',
  github: 'https://github.com/saikiran-patro',
  resume: process.env.PUBLIC_URL + '/Assets/Sai_Kiran_Patro_Resume.pdf',
};
export const skillGroups = [
  { title: 'Frontend & full-stack', skills: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML & CSS', 'Node.js', 'Express', 'FastAPI', 'Python', 'REST APIs', 'WebSockets'] },
  { title: 'AI agents & tools', skills: ['OpenAI Agents SDK', 'LangGraph', 'Google ADK', 'Vertex AI', 'RAG', 'MCP', 'Voice agents', 'OCR', 'Prompt engineering', 'Claude Code', 'OpenAI Codex', 'Cursor', 'Grok'] },
  { title: 'Cloud & foundations', skills: ['GCP', 'GKE', 'Cloud Run', 'Docker', 'Kubernetes', 'MongoDB', 'MySQL', 'Firestore', 'pgvector', 'Git & GitHub', 'C++', 'Data structures & algorithms'] },
];
export const achievements = [
  { title: 'REALSTARS Award', detail: 'Technical excellence at RealPage.', href: 'https://drive.google.com/drive/folders/1z0lUuYhYNTOb8Gt2MpXYS1g_2FAZkoWc', linkLabel: 'View recognition' },
  { title: 'Frontend Expert', detail: 'FrontendExpert certification from AlgoExpert.', href: 'https://certificate.algoexpert.io/FrontendExpert%20Certificate%20FE-2e88dc380f', linkLabel: 'View certificate' },
  { title: 'Codex Hackathon', detail: 'NeuraLensAI placed in the top 30% of approximately 4,000 participants.', href: 'https://www.linkedin.com/posts/sai-kiran-patro_i-built-neuralens-ai-screenshare-voice-activity-7500641412162433024-sKU3', linkLabel: 'Read the story' },
  { title: '400+ DSA problems', detail: 'Data structures and algorithms across coding platforms; certified by Coding Ninjas.', href: 'https://certificate.codingninjas.com/verify/80a54541c2c5798e', linkLabel: 'View certificate' },
  { title: '1st at Hardware Expo', detail: 'A fall-detection system that stood out among 80+ projects.' },
  { title: 'Open source & community', detail: 'Arctic Code Vault Contributor. Sharing space, software, and electronics with 100K+ YouTube views.' },
];
