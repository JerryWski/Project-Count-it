//qs for data inputs
const amountInput = document.querySelector("#amount");
const rateInput = document.querySelector("#rate");
const monthInput = document.querySelector("#month");
//buttons for counting deposit and investment
const btnDeposit = document.querySelector(".calcuate-btn-depo");
const btnInvestment = document.querySelector(".calcuate-btn-invest");
//amounts for deposit and investment
const interestAmountDepo = document.querySelector(".total-interest-depo");
const totalAmountDepo = document.querySelector(".total-amount-depo");
const interestAmountInvest = document.querySelector(".total-interest-invest");
const totalAmountInvest = document.querySelector(".total-amount-invest");
//texts
const errorTextDuration = document.querySelector(".error-text");
const errorTextAmount = document.querySelector(".error-text-amount");
const amountTextDepo = document.querySelectorAll(".amount-text-depo");
const amountTextInvest = document.querySelectorAll(".amount-text-invest");


let interest;
let interestTwo;

const checkInputValues = () => {
  if (amountInput.value <= 0 || rateInput.value <= 0) {
    errorTextAmount.textContent = "Please enter a number greater than 0";
    return false;
  }
  errorTextAmount.textContent= '';
  return true;
};

const calculateDepo = () => {
  let principal = amountInput.value;
  let rate = rateInput.value / 100;
  let month = monthInput.value;

  if (month >= 1 && month <= 12) {
    interest = principal * rate * 0.81 * (month / 12);
    amountTextDepo.forEach((text) => {
      text.classList.add("active");
    });
    interestAmountDepo.textContent = interest.toFixed(2);
    totalAmountDepo.textContent =
      parseFloat(principal) + parseFloat(interest.toFixed(2));
    clearError();
  } else {
    errorTextDuration.textContent = " Please enter a numbers from 1 to 12";
  }
};

const calcuateInvest = () => {
  let principal = amountInput.value;
  let rate = rateInput.value / 100;
  let month = monthInput.value;

  if (month >= 1 && month <= 12) {
    interestTwo = principal * rate * 0.81;
    amountTextInvest.forEach((text) => {
      text.classList.add("active");
    });
    interestAmountInvest.textContent = interestTwo.toFixed(2);
    totalAmountInvest.textContent =
      parseFloat(principal) + parseFloat(interestTwo.toFixed(2));
    clearError();
  } else {
    errorTextDuration.textContent = " Please enter a numbers from 1 to 12";
  }
};

const clearError = () => {
  errorTextDuration.textContent = "";
};

btnDeposit.addEventListener("click", () => {
  if (checkInputValues()) {
    calculateDepo();
  }
});
btnInvestment.addEventListener("click", () => {
  if (checkInputValues()) {
    calcuateInvest();
  }
});

// btnDeposit.addEventListener("click", calculateDepo);
// btnInvestment.addEventListener("click", calcuateInvest);
