import React from "react";

const experienceContent = [
  {
    year: " January 2022 - Present",
    position: "Frontend Developer",
    compnayName: "OneStaff Medical | Omaha, NE",
    details: `Built new company website with ReactJS and NextJS. Designed prototypes and wireframes in Figma. Awarded 10K raise for increasing company visibility `,
  },
  {
    year: " December 2020 - April 2021",
    position: "Software Developer",
    compnayName: "Igedla Health | Remote",
    details: `Collaborated in the development of health startup's company website. Designed mobile screens from Figma mockups.`,
  },
  {
    year: "January 2017 - July 2018",
    position: "Content Moderator",
    compnayName: "Facebook | Menlo Park, CA ",
    details: `Partnered cross-functionally with internal search analysis and engineering teams to implement strategies and improve search results for users. `,
  },
  {
    year: "February 2015 – January 2022",
    position: "Freelance Developer",
    compnayName: "Upwork  | Remote ",
    details: `Responsive web applications in HTML/CSS, Bootstrap, Angular, React, TypeScript, Vue. Mobile applications in iOS/Swift`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            </h5>
            <h5><span className="place open-sans-font">{val.compnayName}</span></h5>
          
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
