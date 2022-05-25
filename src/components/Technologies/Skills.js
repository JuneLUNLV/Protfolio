import { DiReact, DiTerminal,DiPython,DiUnitySmall,DiPhotoshop } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>I leanred React on Udemy, and created OpenBook with NextJS, which is a React framework.</>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>I learned Java in my university courses, learned and developed a Java compiler.</>,
  },
  {
    slug: "python",
    Component: DiPython,
    title: "Python",
    Description: () => <>I learned Python myself by reading documents and books, I use Python mainly for scripting, web crawiling and machine learning projects.</>,
  },
  {
    slug: "unity",
    Component: DiUnitySmall,
    title: "Unity",
    Description: () => <>I have created numerous games using Unity, but I mainly use Unity for creating VR scenes and animations.</>,
  },
  {
    slug: "photoshop",
    Component: DiPhotoshop,
    title: "Photoshop",
    Description: () => <>I learned Photoshop on Udemy, I use Photoshop for my front-end projects.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for both team and individual projects.</>,
  },
];
