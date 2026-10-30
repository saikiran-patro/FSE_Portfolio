import React from 'react';
import { Bot, BrainCircuit, Network, Terminal, Code2, Sparkles, Mic, Workflow, ScanText, SearchCode } from 'lucide-react';
import { ReactComponent as ReactIcon } from '../Assets/skills/react.svg';
import { ReactComponent as TypeScript } from '../Assets/skills/typescript.svg';
import { ReactComponent as JavaScript } from '../Assets/skills/javascript.svg';
import { ReactComponent as Redux } from '../Assets/skills/redux.svg';
import { ReactComponent as Tailwind } from '../Assets/skills/tailwindcss.svg';
import { ReactComponent as Node } from '../Assets/skills/nodejs.svg';
import { ReactComponent as Python } from '../Assets/skills/python.svg';
import { ReactComponent as MongoDB } from '../Assets/skills/mongodb.svg';
import { ReactComponent as Docker } from '../Assets/skills/docker.svg';
import { ReactComponent as Kubernetes } from '../Assets/skills/kubernetes.svg';
import { ReactComponent as GCP } from '../Assets/skills/googlecloud.svg';
import { ReactComponent as Git } from '../Assets/skills/git.svg';
import IconCloud from './ui/icon-cloud';
const icons = [
  ['React', ReactIcon], ['OpenAI Agents SDK', Bot], ['TypeScript', TypeScript], ['LangGraph', Network],
  ['Python', Python], ['OpenAI Codex', Terminal], ['JavaScript', JavaScript], ['Claude Code', Code2],
  ['Node.js', Node], ['Vertex AI', Sparkles], ['Docker', Docker], ['Google ADK', Workflow],
  ['Redux', Redux], ['Voice agents', Mic], ['GCP', GCP], ['Cursor', SearchCode],
  ['Tailwind CSS', Tailwind], ['RAG', BrainCircuit], ['MongoDB', MongoDB], ['OCR', ScanText],
  ['Kubernetes', Kubernetes], ['Git', Git],
].map(([name, Icon]) => ({ name, Icon }));
export function IconSkills() {
  return <div className="skill-cloud-panel"><IconCloud icons={icons} /><p className="cloud-caption">The stack behind the work.<br /><span>Frontend, cloud, and a little AI magic.</span></p></div>;
}
