var projectList = [
  {
    title: "Maitrik E-Commerce Platform",
    stack:
      "React, Redux, Redux Saga, Android (Kotlin), NodeJS, ExpressJS, Firebase, Google Cloud Platform",
    details: [
      "An E-Commerce platform for connecting wholesalers and retailers across pan India.",
      "Developed front-end in React with Material UI library, state management tools Redux, Redux Saga.",
      "Developed back-end REST API using ExpressJs with Firestore NoSQL database and deployed on App Engine.",
      "Developed auto trigger Firebase Cloud Functions.",
    ],
  },
  {
    title: "Covid-19 Patient’s Report Tracking Application",
    stack: "React, Redux, Redux Saga, Firebase",
    details: [
      "Platform for Doctors to monitor home quarantine patients health with daily updated details of oxygen level, temperature and pulse rate.",
      "Developed web app in React, Redux, Redux Saga and Firestore NoSQL database, Firebase at Backend.",
      "Developed back-end with user management using Firebase Auth, Firestore NoSQL database.",
    ],
  },
  {
    title: "AnkurGECA Website",
    stack: "HTML, CSS, JavaScript, PHP",
    details: [
      'Website URL: <b><a target="_blank" href="https://ankur.geca.ac.in">https://ankur.geca.ac.in</a></b>',
    ],
  },
  {
    title: "Maks Clean Systems",
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
