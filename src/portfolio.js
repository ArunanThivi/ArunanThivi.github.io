/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Arunan T",
  title: "Hi! I'm Arunan!",
  subTitle: emoji(
    "A naturally curious, creative, and motivated student 👨‍💻 Experienced in full stack development in node.JS/React and backend development with Python and Java."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RCxChYceXbhrHGCSlx6U_3NchhLmU8e4/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ArunanThivi",
  linkedin: "https://www.linkedin.com/in/arunanthivi/",
  gmail: "arunant@berkeley.edu",
  instagram: "https://instagram.com/arunanthivi",
  facebook: "https://www.facebook.com/arunan.thiviyanathan",
  spotify: "https://open.spotify.com/user/arunankogulan",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "A Little Bit About Me",
  subTitle: "A naurally curious student working towards mastering ALL the tech stacks",
  skills: [
    emoji(
      "🏀 When I'm not cranking the codes, I enjoy watching and playing Basketball (Go Rockets!)"
    ),
    emoji("🎧 Whether I'm studying, working, or just chilling, I am ALWAYS listening to music"),
    emoji(
      "🎥 To flex my creative side, I like to mess around with video and photo editing in Adobe Premiere and Photoshop"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/CalLogo.png"),
      subHeader: "Major: Computer Science (B.A) Minor: Data Science",
      duration: "August 2019 - December 2022 (Expected)",
      desc: "GPA: 3.702",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "node.JS", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "65%"
    },
    {
      Stack: "React",
      progressPercentage: "55%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Undergraduate Student Instructor",
      company: "University of California",
      companylogo: require("./assets/images/CalEECSLogo.jpg"),
      date: "June 2021 - Present",
      desc: "Helped teach UC Berkeley's Great Ideas of Computer Architecture course (CS 61C)",
      descBullets: [
        "Led Weekly small group discussion sections to teach concepts in UC Berkeley's Computer Architecture course",
        "Managed Office Hours throughout the semester to provide personalized assistance to students",
        "Coordinated with professors and staff heads to organize class logisitics for 1200 students"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Qualtrics",
      companylogo: require("./assets/images/XM.jpg"),
      date: "May 2022 - August 2022",
      desc:
        "Worked with Ticketing team to allow clients to view and restore deleted tickets from the XM platform",
      descBullets: [
        "Wrote technical design specification with considerations for scalability and usability",
        "Worked cross functionally with Product Managers, quality engineers and UI designers to solidify product requirements"
      ]
    },
    
    {
      role: "Software Engineering Intern",
      company: "G4TV",
      companylogo: require("./assets/images/G4TV.jpg"),
      date: "June 2021 - August 2021",
      desc:
        "Worked with Analytics team to create a CV model to detect G4 cast members in weekly livestreams",
      descBullets: [
        "Optimized machine learning model for accuracy and precision of recognizing cast members",
        "Generated demos weekly that would be shown to corporate management"
      ]
    },
    

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of my Favorite Projects",
  projects: [
    {
      image: require("./assets/images/SpotifyLogo.png"),
      projectName: "FeatureSearch",
      projectDesc: "A Web App to analyze trends in a user's music tastes, based on the past 6 months of listening history through Spotify",
      footerLink: [
        {
          name: "Check it out!",
          url: "http://spotify.arunanthivi.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Best Design",
      subtitle:
        "Placed 3rd out of 1200 students in designing the most efficent RISC-V CPU for UC Berkeley's Computer Architecture course. Competition was sponsored by Apple Inc.",
      image: require("./assets/images/Apple-Logo.png"),
      footerLink: [
        {
          name: "Project Specification",
          url:
            "https://cs61c.org/fa20/projects/proj3/#design-contest"
        },
        {
          name: "Announcement",
          url: "https://drive.google.com/file/d/1NA2D6D6UfB3Vs4ceBfJPgAgwg63km61b/view?usp=sharing"
        }
      ]
    },
    {
      title: "The Leadership Award",
      subtitle:
        "Established in 1934, The Leadership Award is a one-year, merit-based scholarship that recognizes undergraduate students at UC Berkeley who demonstrate innovative, initiative-driven leadership impacting their academic, work, or community environments. Awarded to top 2% of students",
      image: require("./assets/images/CAALogo.png"),
      footerLink: [
        {
          name: "About the Award",
          url:
            "https://alumni.berkeley.edu/community/scholarships/leadership-award"
        }
      ]
    },

    {
      title: "Eagle Scout",
      subtitle: "Achieved highest rank in Boy Scouts of America. Earned 36 Merit Badges and independently designed and managed community service project for Galveston Island State Park. Awarded to 1% of Boy Scouts nationally",
      image: require("./assets/images/BSALogo.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1oexl2KNM3oIjnFMZPaQc-Rw1hoIBvUTy/view?usp=sharing"},
        {
          name: "Final Project",
          url: "https://drive.google.com/file/d/1Ox5SQBidFUhURZxuU0dh9zHMUMUDE88q/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or sports or just want to say hi? Hit me up!",
  number: "+1 409-354-6444",
  email_address: "arunant@berkeley.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "ArunanThivi", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
