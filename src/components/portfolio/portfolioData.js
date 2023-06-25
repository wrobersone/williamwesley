import Image1 from "../../../public/assets/img/portfolio/airbnb.png";
import Image2 from "../../../public/assets/img/portfolio/amazon.png";
import Image3 from "../../../public/assets/img/portfolio/ecommerce.jpg";
import Image4 from "../../../public/assets/img/portfolio/flex.png";
import Image5 from "../../../public/assets/img/portfolio/hulu.png";
import Image6 from "../../../public/assets/img/portfolio/igedla.png";
import Image7 from "../../../public/assets/img/portfolio/linktree.jpg";
import Image8 from "../../../public/assets/img/portfolio/messenger.png";
import Image9 from "../../../public/assets/img/portfolio/netflix.png";
import Image10 from "../../../public/assets/img/portfolio/onestaff.png";
import Image11 from "../../../public/assets/img/portfolio/realestate.jpg";
import Image12 from "../../../public/assets/img/portfolio/jobsearch.png";
import Image13 from "../../../public/assets/img/portfolio/spotify.png";
import Image14 from "../../../public/assets/img/portfolio/fancy.png";

const PortfolioData = [
  {
    id: 1,
    type: "Airbnb Clone",
    image: Image1,
    tag: ["OneStaff"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Freelance",
        language: "Next.js/React.js, CSS, Javascript, AXIOS, MobX",
        preview: "https://airbnb-clone-two-azure.vercel.app/",
        link: "https://airb-clone-one.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    type: "Amazon Clone",
    image: Image2,
    tag: ["OneStaff", "Logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Amazon Clone",
        client: "Freelance",
        language: " DNN, HTML5, CSS3",
        preview: "https://amazon-clone-taupe-sigma.vercel.app/",
        link: "https://amazon-clone-taupe-sigma.vercel.app/",
      },
    ],
  },
  {
    id: 3,
    type: "E-commerce App",
    image: Image3,
    tag: ["Sandhills", "Logo"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "HTML Website",
        client: "Freelance",
        language: " HTML, CSS, Javascript",
        preview: "https://e-commerce-stripe.vercel.app/",
        link: "https://e-commerce-stripe.vercel.app/",
      },
    ],
  },
  {
    id: 4,
    type: "Flex Fitness",
    image: Image4,
    tag: ["OneStaff"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "HTML Website",
        client: "Freelance",
        language: " HTML, CSS, Javascript",
        preview: "https://www.bidsourcellc.com",
        link: "https://www.bidsourcellc.com",
      },
    ],
  },
  {
    id: 5,
    type: "Hulu Clone",
    image: Image5,
    tag: ["OneStaff"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "HTML Website",
        client: "Freelance",
        language: "HTML, CSS, ReactJS",
        preview: "https://hulu-clone-mauve-sigma.vercel.app/",
        link: "https://hulu-clone-mauve-sigma.vercel.app/",
      },
    ],
  },
  {
    id: 6,
    type: "Igedla Health",
    image: Image6,
    tag: ["OneStaff"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "HTML Website",
        client: "Igedla Health Startup",
        language: "HTML, CSS, Javascript",
        preview: "https://www.igedla.com/",
        link: "https://www.igedla.com/",
      },
    ],
  },
  {
    id: 7,
    type: "Linktree Clone",
    image: Image7,
    tag: ["OneStaff"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "HTML Website",
        client: "Freelance",
        language: "HTML, CSS, Javascript",
        preview: "https://linktree-wine-alpha.vercel.app/",
        link: "https://linktree-wine-alpha.vercel.app/",
      },
    ],
  },
  {
    id: 8,
    type: "Real-time Messenger",
    image: Image8,
    tag: ["Sandhills"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Chat Messenger",
        client: "Freelance",
        language: "HTML, CSS, Javascript",
        preview: "https://chat-app-iota-snowy.vercel.app/",
        link: "https://chat-app-iota-snowy.vercel.app/",
      },
    ],
  },
  {
    id: 9,
    type: "Netflix Clone",
    image: Image9,
    tag: ["Logo", "OneStaff"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Netflix App",
        client: "Freelance",
        language: "InDesign, Illustrator",
        preview: "https://netflix-clone-two-mauve.vercel.app/login",
        link: "https://netflix-clone-two-mauve.vercel.app/login",
      },
    ],
  },
  {
    id: 10,
    type: "OneStaff Medical",
    image: Image10,
    tag: ["Logo", "OneStaff", "Sandhills"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "OneStaff Medical",
        client: "OneStaff Medical",
        language: "InDesign, Illustrator",
        preview: "https://www.onestaffmedical.com/",
        link: "https://www.onestaffmedical.com/",
      },
    ],
  },
  {
    id: 11,
    type: "Real Estate App",
    image: Image11,
    tag: ["Logo"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Real Estate",
        client: "Freelance",
        language: "InDesign, Illustrator",
        preview: "https://modern-realestate.vercel.app/",
        link: "https://modern-realestate.vercel.app/",
      },
    ],
  },
  {
    id: 12,
    type: "Job Search",
    image: Image12,
    tag: ["OneStaff"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Job Search",
        client: "Freelance",
        language: "Next JS, React, TailwindCSS",
        preview: "https://job-search-sage.vercel.app/",
        link: "https://job-search-sage.vercel.app/",
      },
    ],
  },
  {
    id: 13,
    type: "Spotify Clone",
    image: Image13,
    tag: ["OneStaff"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Spotify Clone",
        client: "Freelance",
        language: "Middleware, React, Recoil, TailwindCSS",
        preview: "https://spotify2-eta.vercel.app/",
        link: "https://spotify2-eta.vercel.app/",
      },
    ],
  },
  {
    id: 14,
    type: "Fancy Restaurant",
    image: Image14,
    tag: ["OneStaff"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Fancy Restaurant",
        client: "Freelance",
        language: "HTML, CSS, JS, React",
        preview: "https://fancy-restaurant.netlify.app/",
        link: "https://fancy-restaurant.netlify.app/",
      },
    ],
  },
];

export default PortfolioData;
