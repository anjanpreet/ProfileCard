import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skillName: "html+css", level: "strong" },
  { skillName: "javascript", level: "strong" },
  { skillName: "react", level: "intermediate" },
  { skillName: "AWS", level: "beginner" },
];
function Skill({ skillName, level }) {
  return (
    <>
      <div id="skill">
        <p>{skillName}</p>
        <p id="emoji">
          {level === "strong"
            ? "💪"
            : level === "intermediate"
            ? "👍"
            : level === "beginner"
            ? "👶"
            : null}
        </p>
      </div>
    </>
  );
}

function Skills() {
  return (
    <section id="skills">
      {skills.map((skill) => (
        <Skill
          key={skill.skillName}
          skillName={skill.skillName}
          level={skill.level}
        />
      ))}
    </section>
  );
}

function App() {
  return (
    <>
      <div id="profile-card">
        {/* <section id="profile-photo">Profile Photo</section>
        <section id="profile-summary">Summary</section>
        <section id="skills">Skills</section> */}
        <section id="profile-photo"></section>
        <section id="profile-summary">
          <h2>Your Name</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </section>
        <Skills />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
