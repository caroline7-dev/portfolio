// filter.js

const colors = {
  beatmap: "rgb(255,45,155)",
  "3d": "rgb(113,59,229)",
  banners: "rgb(91,140,255)",
  posters: "rgb(6,176,151)",
};

function filterGallery(category) {
  // Update button styles
  ["beatmap", "3d", "banners", "posters"].forEach((cat) => {
    const btn = document.getElementById("btn-" + cat);
    const color = colors[cat];
    btn.style.background = "transparent";
    btn.style.color = color;
    btn.style.borderColor = color;
  });

  const activeBtn = document.getElementById("btn-" + category);
  const activeColor = colors[category];
  activeBtn.style.background = activeColor;
  activeBtn.style.color = "#fff";
  activeBtn.style.borderColor = activeColor;

  // Filter images
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.style.display = item.dataset.category === category ? "block" : "none";
  });
}

// Set beatmap active by default on page load
document.addEventListener("DOMContentLoaded", () => filterGallery("beatmap"));

// Toggle Accordion
function toggleAccordion() {
  const content = document.getElementById("accordion-content");
  content.classList.toggle("open");
}
