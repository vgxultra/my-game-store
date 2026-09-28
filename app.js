const homeScreen = document.getElementById("home");
const buyScreen = document.getElementById("buy");
const accountScreen = document.getElementById("account");
const gameTitle = document.getElementById("gameTitle");
const plans = document.getElementById("plans");
const notReady = document.getElementById("notReady");
const backButton = document.getElementById("backButton");
const accountBack = document.getElementById("accountBack");

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const demoPay = document.getElementById("demoPay");
const closeModal = document.getElementById("closeModal");

const accountStatus = document.getElementById("accountStatus");
const accountGame = document.getElementById("accountGame");
const accountPlan = document.getElementById("accountPlan");
const accountExpiry = document.getElementById("accountExpiry");

let selectedGame = null;
let selectedPlan = null;

const availableGames = {
  "Game VIP Arena of Valor x64": true,
  "VIP Clash of Titans x64": false,
  "VIP Garena Aov x64": false,
  "VIP Garena Rov x64": false
};

function showHome() {
  homeScreen.classList.remove("hidden");
  buyScreen.classList.add("hidden");
  accountScreen.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showBuyScreen(game) {
  selectedGame = game;
  gameTitle.textContent = game;

  const available = availableGames[game] === true;
  plans.classList.toggle("hidden", !available);
  notReady.classList.toggle("hidden", available);

  homeScreen.classList.add("hidden");
  accountScreen.classList.add("hidden");
  buyScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".game-button").forEach(button => {
  button.addEventListener("click", () => {
    showBuyScreen(button.dataset.game);
  });
});

backButton.addEventListener("click", showHome);
accountBack.addEventListener("click", showHome);

document.querySelector('nav a[href="#home"]').addEventListener("click", event => {
  event.preventDefault();
  showHome();
});

document.querySelector('nav a[href="#account"]').addEventListener("click", event => {
  event.preventDefault();
  homeScreen.classList.add("hidden");
  buyScreen.classList.add("hidden");
  accountScreen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", () => {
    selectedPlan = {
      name: button.dataset.plan,
      price: button.dataset.price
    };

    modalText.textContent = `${selectedGame} — ${selectedPlan.name} for $${selectedPlan.price}.`;
    modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", event => {
  if (event.target === modal) modal.classList.add("hidden");
});

// DEMO ONLY: this does not process real money.
demoPay.addEventListener("click", () => {
  if (!selectedGame || !selectedPlan) return;

  const days = selectedPlan.name.startsWith("30") ? 30 : 90;
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + days);

  accountStatus.textContent = "Demo Active";
  accountStatus.style.color = "var(--success)";
  accountGame.textContent = selectedGame;
  accountPlan.textContent = selectedPlan.name;
  accountExpiry.textContent = expiry.toLocaleDateString();

  modal.classList.add("hidden");
  accountScreen.classList.remove("hidden");
  homeScreen.classList.add("hidden");
  buyScreen.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
