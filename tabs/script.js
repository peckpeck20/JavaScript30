const constants = { rootElement: "root", contentElement: "content-container" };
const root = document.getElementById("root");

const createElement = (el) => document.createElement(`${el ? el : "div"}`);

const findElement = (el) => document.querySelector(el);

const renderContent = (container, newElement) => {
  container.innerHTML = "";
  container.appendChild(newElement);
};

const loader = () => {
  const container = createElement();

  container.innerHTML = `<div class="ea-fgrid ea-fgrid--center">
<div class="ea-fgrid__item ea-fgrid__item--center ea-fgrid__item--block ea-fgrid__item--column">
<span class="ea-loading" aria-label="ladataan" tabindex="0"></span>
<h2 class="ea-h2">Tilaustasi käsitellään</h2>
<h4 class="ea-ingresstext">Ole hyvä ja odota hetki</h4>
</div>
</div>`;

  return container;
};

const renderTabs = () => {
  const container = createElement();
  container.id = "main-container";

  const tabsContainer = createElement();

  const entries = [
    { name: "tab", content: "onnee" },
    { name: "tab2", content: "twoo" },
    { name: "tab3", content: "tres!" },
  ];

  entries.forEach((item, index) => {
    const tab = createElement("button");

    tab.setAttribute("data-index", index);
    tab.innerText = item.name;
    tab.addEventListener("click", () => {
      const contentElement = findElement(`#${constants.contentElement}`);

      const updatedContent = createElement();
      updatedContent.innerHTML = item.content;

      renderContent(contentElement, updatedContent);
    });
    tabsContainer.appendChild(tab);
  });

  container.appendChild(tabsContainer);

  const content = createElement();
  content.id = constants.contentElement;

  container.appendChild(content);

  return container;
};

renderContent(root, renderTabs());
