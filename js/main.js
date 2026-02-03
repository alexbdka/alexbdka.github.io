/**
 * ICONS LIBRARY
 * Centralized SVG storage for cleaner usage in the data object.
 */
const ICONS = {
  gamepad: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 4C20.3137 4 23 6.68629 23 10V14C23 17.3137 20.3137 20 17 20H7C3.68629 20 1 17.3137 1 14V10C1 6.68629 3.68629 4 7 4H17ZM17 6H7C4.8578 6 3.10892 7.68397 3.0049 9.80036L3 10V14C3 16.1422 4.68397 17.8911 6.80036 17.9951L7 18H17C19.1422 18 20.8911 16.316 20.9951 14.1996L21 14V10C21 7.8578 19.316 6.10892 17.1996 6.0049L17 6ZM10 9V11H12V13H9.999L10 15H8L7.999 13H6V11H8V9H10ZM18 13V15H16V13H18ZM16 9V11H14V9H16Z"></path></svg>`,

  globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>`,
};

/**
 * PROJECT DATA
 * The "Mini DB".
 */
const projectsData = [
  {
    title: "GoH Mod Manager",
    description:
      "A modern mod manager for Call to Arms: Gates of Hell, built with PySide6.",
    link: "https://github.com/alexbdka/goh-mod-manager",
    tags: ["Python", "PySide6"],
    icon: "gamepad",
  },
  {
    title: "Confrérie des Traducteurs - Extensions",
    description:
      "Unofficial web extension for the Confrérie des Traducteurs community, enhancing the user experience.",
    link: "https://github.com/alexbdka/cdt-extensions",
    tags: ["JavaScript", "Web Extension"],
    icon: "globe",
  },
];

/**
 * Creates the HTML string for a single project card.
 * @param {Object} project - The project data object
 * @returns {string} HTML string
 */
function createCard(project) {
  // Select the icon from the library, fallback to "folder" if missing
  const iconSvg = ICONS[project.icon] || ICONS.folder;

  // Create tech tags HTML
  const tagsHtml = project.tags
    .map((tag) => `<span class="tech-tag">${tag}</span>`)
    .join("");

  return `
    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="card" aria-label="View ${project.title} on GitHub">
      <div class="card-header">
        <div class="card-icon">
          ${iconSvg}
        </div>
        <h3 class="card-title">
          ${project.title}
          <svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </h3>
      </div>
      <div class="card-content">
        <p>${project.description}</p>
      </div>
      <div class="card-footer">
        ${tagsHtml}
      </div>
    </a>
  `;
}

/**
 * Main Initialization
 * Waits for DOM content to be fully loaded before injecting cards.
 */
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("projects-grid");

  if (grid) {
    grid.innerHTML = projectsData.map(createCard).join("");
    console.log(
      `[Portfolio] Loaded ${projectsData.length} projects successfully.`,
    );
  }
});
