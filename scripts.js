function typeWrite(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = " ";

  textArray.forEach((letter, index) => {
    setTimeout(function () {
      element.innerHTML += letter;
    }, 75 * index);
  });
}

setInterval(() => {
  const h3Element = document.querySelector(".home-texts h3");
  typeWrite(h3Element);
}, 4000);

fetch("https://api.github.com/users/fabio-c266/repos")
  .then((req) => {
    if (req.message == "Not Found") return;

    req.json().then((repositories) => {
      const projectsElement = document.querySelector(".portfolio-container");
      repositories.map((repos, index) => {
        const { name, description, language, private, html_url } = repos;

        if (!private && index <= 5) {
          const projectElement = document.createElement("div");
          projectElement.className = "project";

          let respositoryNameElement = document.createElement("a");
          respositoryNameElement.innerText = name;
          respositoryNameElement.href = html_url;
          respositoryNameElement.target = "_blank";
          respositoryNameElement.className = "project-title";

          let respositoryDescriptionElement = document.createElement("p");
          respositoryDescriptionElement.innerText = description;

          let repositoryStartElement = document.createElement("div");
          repositoryStartElement.className = "project-start";
          repositoryStartElement.append(respositoryNameElement);
          repositoryStartElement.append(respositoryDescriptionElement);

          projectElement.append(repositoryStartElement);

          let repositoryFoooterElement = document.createElement("div");
          repositoryFoooterElement.className = "project-footer";

          projectElement.append(repositoryFoooterElement);

          let repositoryLanguageElement = document.createElement("p");
          repositoryLanguageElement.innerText = language;
          repositoryLanguageElement.className = "repository-language";

          repositoryFoooterElement.append(repositoryLanguageElement);

          projectsElement.append(projectElement);
        }
      });
    });
  })
  .catch((err) => console.log(err));

function handleNavbar() {
  document.querySelector(".menu-toogle").classList.toggle("active");
  document.querySelector("header").classList.toggle("mobile");
}
