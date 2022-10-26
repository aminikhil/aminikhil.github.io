var projectList = [
  {
    title: "E-Commerce Platform",
    stack:
      "React, Redux, Redux Saga, Android (Kotlin), NodeJS, ExpressJS, Firebase, Google Cloud Platform",
    details: [
      "An e-commerce platform for connecting wholesalers and retailers across pan India.",
      "Developed Admin & Wholesalers application in React and state management tools like Redux and Redux Saga.",
      "Developed REST API using Express.js with Firestore NoSQL database and deployed on Google App Engine.",
      "Developed auto-triggered Firebase Cloud Functions (Serverless Application).",
    ],
  },
  {
    title: "Covid-19 Patients' Health Tracking Application",
    stack: "React, Redux, Redux Saga, Firebase",
    details: [
      "Platform for Doctors to daily monitor home quarantine patients’ health with details of their oxygen level, temperature, and pulse rate.",
      "Developed a progressive web app in React and state management tools like Redux and Redux Saga.",
      "Used user authentication and authorization Firebase Auth service, Firestore NoSQL database.",
    ],
  },
  {
    title: "Website for AnkurGECA",
    stack: "HTML, CSS, JavaScript, PHP",
    details: [
      'Website URL: <b><a target="_blank" href="https://ankur.geca.ac.in">https://ankur.geca.ac.in</a></b>',
    ],
  },
  {
    title: "Website for Maks Clean Systems",
    stack: "React",
    details: [
      'Website URL: <b><a target="_blank" href="https://makscleansystems.com">https://makscleansystems.com/</a></b>',
    ],
  },
];

function showProjectDetails(i) {
  const menu = document.getElementById("project-menu");
  var menuList = [];
  menu.childNodes.forEach(function (item) {
    item.className = "";
    if (item.localName === "li") menuList.push(item);
  });
  menuList[i].className = "active";

  const title = document.getElementById("project-headline");
  title.innerHTML = projectList[i].title;

  const tech = document.getElementById("project-tech");
  tech.innerHTML = projectList[i].stack;

  const details = document.getElementById("project-details");
  details.innerHTML =
    "<li>" + projectList[i].details.join("</li><li>") + "</li>";
}

function getMessageInfo() {
  const isValid = document.forms["contact-form"].reportValidity();
  var info = {};
  if (isValid) {
    info["name"] = document.getElementById("name").value;
    info["email"] = document.getElementById("email").value;
    info["phone"] = document.getElementById("phone").value;
    info["message"] = document.getElementById("message").value;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  }

  return { value: info, isValid };
}

function navToggle() {
  const nav = document.getElementById("nav");
  if (
    nav.className === "expanded" ||
    (window.innerWidth > 600 && nav.className === "desktop-extended")
  ) {
    nav.className = "";
  } else {
    nav.className = "expanded";
  }
}
