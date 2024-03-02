import style from "./skills.module.css";

const Skills: React.FC = () => {
 

  return (
  <div className={style.skills} id="skills">
   <h3>Skills</h3>
   <div className={style.skillsWrapper}>
        <div><img src="/devicon_nextjs.svg" alt="next js icon" /> <p>NextJS</p></div>
        <div><img src="/logos_react.svg" alt="react icon" /> <p>React</p></div>
        <div><img src="/logos_javascript.svg" alt="javascript icon" /> <p>JavaScript</p></div>
        <div><img src="/vscode-icons_file-type-typescript-official.svg" alt="typescript icon" /> <p>TypeScript</p></div>
        <div><img src="/devicon_gitlab.svg" alt="gitlub icon" /> <p>GitLab</p></div>
        <div><img src="/devicon_azuredevops.svg" alt="azuere devops icon" /> <p>Azure DevOps</p></div>
        <div><img src="/scrumorg-1 1.svg" alt="scrum icon" /> <p>Scrum</p></div>
        <div><img src="/devicon_html5.svg" alt="html icon" /> <p>HTML5</p></div>
        <div><img src="/vscode-icons_file-type-css.svg" alt="styles icon" /> <p>CSS | SASS | Bootstrap</p></div>
        <div><img src="/devicon_jquery.svg" alt="jquey icon" /> <p>jQuery</p></div>
   </div>
  </div>
    )
};

export default Skills;