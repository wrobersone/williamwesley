import React from "react";

const personalInfoContent = [
  { meta: "Hometown", metaInfo: "Bay Area", hasColor: "" },
  // { meta: "Age", metaInfo: "34 Years", hasColor: "" },
  // { meta: "Nationality", metaInfo: "Tunisian", hasColor: "" },
  { meta: "Location", metaInfo: "Omaha, NE", hasColor: "" },
  { meta: "phone", metaInfo: "816-878-3886", hasColor: "" },
  { meta: "Email", metaInfo: "wmrobersone@yahoo.com", hasColor: "" },
  // { meta: "languages", metaInfo: "English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
