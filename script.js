const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector(".check-btn");
const nextButton = document.querySelector(".next-btn");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const cashText = document.querySelector(".cash-text");

const availableNotes = [2000, 500, 100, 50, 20, 10, 1];
errorMessage.innerText = "First enter your bill amount & Press next to proceed";
cashGiven.style.display = "none";
checkButton.style.display = "none";
cashText.style.display = "none";
const showCashSection = function () {
  // if (!bill - amount) {
  if (billAmount.value > 0) {
    cashGiven.style.display = "block";
    errorMessage.innerText = "Enter your cash amount";
    checkButton.style.display = "block";
    cashText.style.display = "inline";
  } else {
    showMessage("Bill Amount should be greater than zero");
  }
};
nextButton.addEventListener("click", showCashSection);

const validateBillandCashAmount = function () {
  hideMessage();

  if (cashGiven.value > billAmount.value) {
    const amountToReturn = cashGiven.value - billAmount.value;

    calculateChange(amountToReturn);
  } else if (billAmount.value === cashGiven.value) {
    showMessage("No change is available");
  } else {
    showMessage("Do you want to wash dish?");
  }
};

const hideMessage = () => {
  errorMessage.style.display = "none";
};
const showMessage = (msg) => {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
};

const calculateChange = (amount) => {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amount / availableNotes[i]);

    amount = amount % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
    // calculateChange(amount);
  }
};

checkButton.addEventListener("click", validateBillandCashAmount);
