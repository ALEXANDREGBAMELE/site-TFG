const params = new URLSearchParams(window.location.search);
const churchKey = params.get("church");

const church = CHURCHES[churchKey];

if (!church) {
  document.body.innerHTML = "<h1>Église introuvable</h1>";
  throw new Error("Church not found");
}

// HERO
document.getElementById("hero").style.backgroundImage =
  `url('${church.heroImage}')`;
document.getElementById("churchName").textContent = church.name;
document.getElementById("churchSlogan").textContent = church.slogan;

// DESCRIPTION
document.getElementById("churchDescription").textContent = church.description;
document.getElementById("churchLocation").textContent = church.meta.location;
document.getElementById("churchCreation").textContent = church.meta.creation;
document.getElementById("churchMembers").textContent = church.meta.members;
document.getElementById("churchImage").src = church.churchImage;

// PASTEUR
document.getElementById("pastorName").textContent = church.pastor.name;
document.getElementById("pastorBio").textContent = church.pastor.bio;
document.getElementById("pastorImage").src = church.pastor.image;

// PROGRAMMES
const programmesContainer = document.getElementById("programmes");
church.programmes.forEach(p => {
  const div = document.createElement("div");
  div.className = "event";
  div.innerHTML = `
    <p class="event-date ${p.highlight ? "gold" : ""}">
      ${p.day} – ${p.time}
    </p>
    <h4>${p.title}</h4>
  `;
  programmesContainer.appendChild(div);
});

// MAP
document.getElementById("churchMap").src = church.map;
