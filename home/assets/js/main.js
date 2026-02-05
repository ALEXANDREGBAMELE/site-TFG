// ----------------- includeHTML -----------------
function includeHTML(id, file, callback) {
  const container = document.getElementById(id);
  if (!container) return;

  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("404 Not Found");
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
      console.log(`Included ${file} into #${id}`);
      if (callback) callback();
    })
    .catch(err => console.error(`Error loading ${file}`, err));
}

// ----------------- INITIALISATION -----------------
document.addEventListener("DOMContentLoaded", () => {
  // Inclure le header et footer avant d'attacher les événements
  includeHTML("header", "partial/header.html", initPage);
  includeHTML("foot", "partial/footer.html");
});

function initPage() {
  // ----------- Modal RDV -----------
  const modal = document.getElementById("rdvModal");

  document.addEventListener("click", (e) => {
    // Ouvrir modal
    if (e.target.id === "openRdv") {
      modal?.classList.add("active");
      document.body.classList.add("modal-open");
    }

    // Fermer modal
    if (
      e.target.id === "closeRdv" ||
      e.target.classList.contains("rdv-overlay")
    ) {
      modal?.classList.remove("active");
      document.body.classList.remove("modal-open");
    }

    // Hamburger menu
    if (e.target.closest(".hamburger")) {
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");
      hamburger.classList.toggle("open");
      navLinks?.classList.toggle("active");
    }
  });
}
