import IconCloud from "../components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "python",
  "c++",
  "nodedotjs",
  "express",
  "firebase",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  
];

export function IconSkills() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-5 py-0 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
