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

const calculate = (e) => {
  let principal = amountInput.value;
  let rate = rateInput.value / 100;
  let month = monthInput.value;
  let targetClass = e.target.classList[0];

  if (principal <= 0 || rate <= 0) {
    errorTextAmount.textContent = "Please enter a number greater than 0";
    return;
  } else {
    errorTextAmount.textContent = "";
  }

  if (month >= 1 && month <= 12) {
    let interest =
      targetClass === "calcuate-btn-depo"
        ? principal * rate * 0.81 * (month / 12)
        : principal * rate * 0.81;

    let amountText =
      targetClass === "calcuate-btn-depo" ? amountTextDepo : amountTextInvest;

    let interestAmount =
      targetClass === "calcuate-btn-depo"
        ? interestAmountDepo
        : interestAmountInvest;

    let totalAmount =
      targetClass === "calcuate-btn-depo" ? totalAmountDepo : totalAmountInvest;

    amountText.forEach((text) => {
      text.classList.add("active");
    });

    interestAmount.textContent = interest.toFixed(2);
    totalAmount.textContent =
      parseFloat(principal) + parseFloat(interest.toFixed(2));

    clearError();
  } else {
    errorTextDuration.textContent = " Please enter a number from 1 to 12";
  }
};

const clearError = () => {
  errorTextDuration.textContent = "";
};

btnDeposit.addEventListener("click", calculate);
btnInvestment.addEventListener("click", calculate);
