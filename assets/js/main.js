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
