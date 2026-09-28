let selectedGame = "";
let selectedPlan = "";
let selectedPrice = "";


/* =========================
   SHOW HOME
========================= */

function showHome() {

  document
    .getElementById("homeScreen")
    .classList.remove("hidden");

  document
    .getElementById("buyScreen")
    .classList.add("hidden");

  document
    .getElementById("accountScreen")
    .classList.add("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   OPEN GAME
========================= */

function openGame(game) {

  selectedGame = game;

  const title =
    document.getElementById("gameTitle");


  if (game === "Arena of Valor") {

    title.textContent =
      "Game VIP Arena of Valor x64";

  } else if (game === "Clash of Titans") {

    title.textContent =
      "Game VIP Clash of Titans x64";

  } else if (game === "Garena Aov") {

    title.textContent =
      "Game VIP Garena Aov x64";

  } else if (game === "Garena Rov") {

    title.textContent =
      "Game VIP Garena Rov x64";
  }


  document
    .getElementById("homeScreen")
    .classList.add("hidden");

  document
    .getElementById("accountScreen")
    .classList.add("hidden");

  document
    .getElementById("buyScreen")
    .classList.remove("hidden");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   ACCOUNT
========================= */

function showAccount() {

  document
    .getElementById("homeScreen")
    .classList.add("hidden");

  document
    .getElementById("buyScreen")
    .classList.add("hidden");

  document
    .getElementById("accountScreen")
    .classList.remove("hidden");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   DEMO BUY
========================= */

function demoBuy(plan, price) {

  selectedPlan = plan;

  selectedPrice = price;


  const modal =
    document.getElementById("modal");

  const modalText =
    document.getElementById("modalText");


  modalText.textContent =
    `${selectedGame} — ${plan} — $${price}`;


  modal.classList.remove("hidden");
}


/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

  document
    .getElementById("modal")
    .classList.add("hidden");
}


/* =========================
   CONFIRM PURCHASE
========================= */

function confirmPurchase() {

  const days =
    selectedPlan === "30 Days"
      ? 30
      : 90;


  const expiry =
    new Date();


  expiry.setDate(
    expiry.getDate() + days
  );


  document
    .getElementById("accountStatus")
    .textContent = "Demo Active";


  document
    .getElementById("accountStatus")
    .style.color = "#15803d";


  document
    .getElementById("accountGame")
    .textContent = selectedGame;


  document
    .getElementById("accountPlan")
    .textContent = selectedPlan;


  document
    .getElementById("accountExpiry")
    .textContent =
      expiry.toLocaleDateString();


  const downloadButton =
    document.getElementById(
      "downloadButton"
    );


  downloadButton.disabled = false;

  downloadButton.style.background =
    "#111827";

  downloadButton.style.color =
    "#ffffff";

  downloadButton.style.cursor =
    "pointer";


  closeModal();

  showAccount();
}


/* =========================
   DOWNLOAD DEMO
========================= */

document
  .getElementById("downloadButton")
  .addEventListener(
    "click",
    function () {

      if (this.disabled) {
        return;
      }


      alert(
        "Demo download button.\n\n" +
        "The real APK download will be connected " +
        "after the payment system is implemented."
      );
    }
  );


/* =========================
   START
========================= */

showHome();
