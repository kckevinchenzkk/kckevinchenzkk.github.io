import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li key={i} className="software-skill-inline" name={skill.skillName}>
              {skill.iconUrl ? (
                <img
                  src={skill.iconUrl}
                  alt={skill.skillName}
                  width="40"
                  height="40"
                />
              ) : (
                <i className={skill.fontAwesomeClassname}></i>
              )}
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
