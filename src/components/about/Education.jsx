import React from "react";

const educationContent = [
  {
    year: "2021",
    degree: "Backend, SQL and DevOps with Python Certificate",
    institute: "Nucamp Online Bootcamp",
    details: `Learn data structures and algorithms to build robust applications with Python and SQL. Use DevOps tools and deploy to the Amazon AWS, Microsoft Azure and Google clouds.`,
  },
  {
    year: "2020",
    degree: "Google IT Support Certificate",
    institute: "Coursera",
    details: `Cloud Computing / Debugging / Customer Service / Encryption Algorithms and Techniques / Network Protocols`,
  },
  {
    year: "2017",
    degree: "Frontend Developer Certificate ",
    institute: "Codify Academy",
    details: `HTML/CSS, Bootstrap, AJAX, VanillaJS, JQuery, Media Queries.`,
  },
  {
    year: "2006",
    degree: "Computer Information Systems ",
    institute: "Lincoln University",
    details: `Bachelor Of Science`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
             </h5>
             
             <h5><span className="place open-sans-font">{val.institute}</span></h5>
         
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
