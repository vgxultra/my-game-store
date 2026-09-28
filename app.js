const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const demoPay = document.getElementById("demoPay");
const closeModal = document.getElementById("closeModal");
const accountStatus = document.getElementById("accountStatus");
const accountGame = document.getElementById("accountGame");
const accountPlan = document.getElementById("accountPlan");
const accountExpiry = document.getElementById("accountExpiry");
const downloadButton = document.getElementById("downloadButton");
let selectedPlan = null;

document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", () => {
    selectedPlan = {
      name: button.dataset.plan,
      days: Number(button.dataset.days),
      price: button.dataset.price
    };
    modalTitle.textContent = `Buy ${selectedPlan.name}`;
    modalText.textContent = `Game VIP Arena of Valor x64 — $${selectedPlan.price} for ${selectedPlan.days} days.`;
    modal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", event => {
  if (event.target === modal) modal.classList.add("hidden");
});

demoPay.addEventListener("click", () => {
  if (!selectedPlan) return;
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + selectedPlan.days);
  accountStatus.textContent = "Demo Active";
  accountStatus.style.color = "#15803d";
  accountGame.textContent = "Arena of Valor x64";
  accountPlan.textContent = selectedPlan.name;
  accountExpiry.textContent = expiry.toLocaleDateString();
  downloadButton.disabled = false;
  downloadButton.style.background = "#111827";
  downloadButton.style.color = "#ffffff";
  downloadButton.style.cursor = "pointer";
  modal.classList.add("hidden");
  document.getElementById("account").scrollIntoView({ behavior: "smooth" });
});

downloadButton.addEventListener("click", () => {
  if (!downloadButton.disabled) {
    alert("Demo download button.\n\nThe real APK download will be connected after payment verification is implemented.");
  }
});
