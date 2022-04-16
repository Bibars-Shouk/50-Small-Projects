const container = document.querySelector(".container");

const createSnapshot = (project) => {
  const divElement = document.createElement("div");
  divElement.classList.add("snapshot");

  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", `snapshots/${project}.png`);

  divElement.appendChild(imgElement);

  return divElement;
};

const createButton = (href, text, icon) => {
  const aElement = document.createElement("a");
  aElement.setAttribute("href", href);
  aElement.setAttribute("target", "__blank");

  const spanElement = document.createElement("span");
  spanElement.innerText = text;

  const iconElement = document.createElement("i");
  iconElement.classList.add("fa", icon);

  spanElement.appendChild(iconElement);

  aElement.appendChild(spanElement);

  return aElement;
};

const setItems = () => {
  projects.forEach((project) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const headerElement = document.createElement("h2");
    headerElement.innerText = project;

    cardElement.appendChild(headerElement);

    cardElement.appendChild(createSnapshot(project));

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    btnContainer.appendChild(
      createButton(
        `https://github.com/Bibars-Shouk/50-Small-Projects/tree/main/${project}`,
        "View Source Code ",
        "fa-code"
      )
    );

    btnContainer.appendChild(
      createButton(`./${project}/index.html`, "View Live Demo ", "fa-eye")
    );

    cardElement.appendChild(btnContainer);

    container.appendChild(cardElement);
  });
};

setItems();
