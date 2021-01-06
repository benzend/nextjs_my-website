import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      imgSource: "./images/thumbnails/languageApp-thumbnail.png",
      imgAlt: "a website with a matching game",
      title: "Language Learning App",
      tech: ">>React<<",
      gitHubUrl: "https://github.com/benzend/language-learning-app",
      liveUrl: "https://thirsty-wright-d1d04e.netlify.app/",
    },
    {
      imgSource: "./images/thumbnails/react-api-thumbnail.png",
      imgAlt: "an app with people and cards and a folder editor",
      title: "Person API",
      tech: ">>React<<",
      gitHubUrl: "https://github.com/benzend/react-api-handler",
      liveUrl: "https://serene-kirch-b5fcfb.netlify.app/",
    },
    {
      imgSource: "./images/thumbnails/react-calculator_thumb.png",
      imgAlt: "a calculator made with react and typescript",
      title: "React Calculator",
      tech: ">>React<<",
      gitHubUrl: "https://github.com/benzend/react-typescript-calculator",
      liveUrl: "https://quirky-kalam-6dc848.netlify.app/",
    },
    {
      imgSource: "./images/thumbnails/todo-list-thumbnail.png",
      imgAlt: "a todo list",
      title: "To-do List",
      tech: ">>React<<",
      gitHubUrl: "https://github.com/benzend/todo-application",
      liveUrl: "https://quizzical-edison-93c715.netlify.app/",
    },
    {
      imgSource: "./images/thumbnails/tracker_thumbnail.png",
      imgAlt: "Timer based on Trello",
      title: "Organizational Timer",
      tech: ">>Vue<<",
      gitHubUrl: "https://github.com/Zallyy/Tracker-App",
      liveUrl: "https://trackerstats.netlify.app/",
    },
    {
      imgSource: "./images/thumbnails/TicTacToe-example-thumbnail.png",
      imgAlt: "tic-tac-toe project example",
      title: "Tic Tac Toe",
      tech: ">>Vanilla JS<<",
      gitHubUrl: "https://github.com/benzend/tic-tac-toe",
      liveUrl: "https://benzend.github.io/tic-tac-toe/",
    },
    {
      imgSource: "./images/thumbnails/Accounting-Website-example-thumbnail.png",
      imgAlt: "a website design for accountants",
      title: "Accounting Website",
      tech: ">>JQuery<<",
      gitHubUrl: "https://github.com/benzend/accounting-website",
      liveUrl: "https://benzend.github.io/accounting-website/",
    },
    {
      imgSource: "./images/thumbnails/PomodoroTimer-thumbnail.png",
      imgAlt: "a pomodoro timer with background and buttons",
      title: "Pomodoro Timer",
      tech: ">>Vanilla JS<<",
      gitHubUrl: "https://github.com/benzend/pomodoro-timer",
      liveUrl: "https://benzend.github.io/pomodoro-timer/",
    },
    {
      imgSource: "./images/thumbnails/JumpStart-example-thumbnail.png",
      imgAlt: "a website labeled jumpstart with design",
      title: "JumpStart Website",
      tech: ">>Vanilla JS<<",
      gitHubUrl: "https://github.com/benzend/jumpstart-website",
      liveUrl: "https://benzend.github.io/jumpstart-website/",
    },
    {
      imgSource: "./images/thumbnails/Mini-RPG-Game-example-thumbnail.png",
      imgAlt: "there are CUBES EVERYWHERE",
      title: "Mini Game",
      tech: ">>Vanilla JS<<",
      gitHubUrl: "https://github.com/benzend/small-rpg-game",
      liveUrl: "https://benzend.github.io/small-rpg-game/",
    },
    {
      imgSource: "./images/thumbnails/Portfolio-thumbnail.png",
      imgAlt: "Ben's other portfolio example",
      title: "An Old Portfolio",
      tech: ">>Vanilla JS<<",
      gitHubUrl: "https://github.com/benzend/creative-portfolio",
      liveUrl: "https://benzend.github.io/creative-portfolio/",
    },
  ];
  return (
    <div>
      {projects.map((project) => (
        <Project
          imgSource={project.imgSource}
          imgAlt={project.imgAlt}
          title={project.title}
          tech={project.tech}
          gitHubUrl={project.gitHubUrl}
          liveUrl={project.liveUrl}
        />
      ))}
    </div>
  );
}
