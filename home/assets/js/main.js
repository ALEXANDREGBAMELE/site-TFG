const openRdv = document.getElementById("openRdv");
const closeRdv = document.getElementById("closeRdv");
const modal = document.getElementById("rdvModal");

openRdv.addEventListener("click", () => {
  modal.classList.add("active");
  document.body.classList.add("modal-open");
});

closeRdv.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
});

document.querySelector(".rdv-overlay").addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
});



document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if(hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }
});


