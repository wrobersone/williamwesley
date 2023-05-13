import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML/CSS" },
  { skillClass: "p85", skillPercent: "85", skillName: "JavaScript" },
  { skillClass: "p80", skillPercent: "80", skillName: "Figma" },
  { skillClass: "p80", skillPercent: "80", skillName: "UI/UX" },
  { skillClass: "p85", skillPercent: "85", skillName: "React" }, 
  { skillClass: "p70", skillPercent: "70", skillName: "TypeScript" },
  { skillClass: "p65", skillPercent: "65", skillName: "SQL" },
  { skillClass: "p60", skillPercent: "60", skillName: "Python" },
  { skillClass: "p60", skillPercent: "60", skillName: "REST" },
  { skillClass: "p55", skillPercent: "60", skillName: "Swift" },
  { skillClass: "p45", skillPercent: "45", skillName: "C#" },
  { skillClass: "p45", skillPercent: "45", skillName: "JAVA" },
  
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
