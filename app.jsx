function createElement(tag, className = "", content = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
}

function App() {
  const main = createElement("main", "relative");
  
  // Sticky Navbar
  const header = createElement("header", "sticky top-0 z-50 bg-white shadow-md");
  const nav = createElement("div", "nav", "Navigation Bar"); // Replace with actual nav
  header.appendChild(nav);
  main.appendChild(header);
  
  // Container for sections
  const container = createElement("div", "container mx-auto px-4");
  
  // Sections
  const sections = [
    { class: "padding-y", content: "Hero Section" },
    { class: "padding-y bg-gray-100", content: "Super Quality" },
    { class: "padding-y", content: "Popular Products" },
    { class: "padding-y bg-blue-50", content: "Services" },
    { class: "padding-y", content: "Special Offer" },
    { class: "padding-y bg-gray-200", content: "Customer Reviews" },
    { class: "padding-y flex justify-center", content: "Subscribe" },
  ];

  sections.forEach(({ class: cls, content }) => {
    const section = createElement("section", cls, content);
    container.appendChild(section);
  });

  main.appendChild(container);
  
  // Footer
  const footer = createElement("footer", "bg-gray-900 text-white py-12", "Footer Section");
  main.appendChild(footer);

  document.body.appendChild(main);
}

App();
