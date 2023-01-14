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
//error text
const errorText = document.querySelector('.error-text')
let interest;

const calculateDepo = () => {
  let principal = amountInput.value;
  let rate = (rateInput.value / 100);
  let month = monthInput.value;

  if(month >= 1 && month <= 12) {
    interest = (principal * rate) * (month / 12);
    interestAmountDepo.textContent = interest.toFixed(2);
    totalAmountDepo.textContent = principal + interest.toFixed(2);
    clearError();
  } else {
    errorText.textContent = " Please enter a range of 1 to 12 months";
    
    }
}

const clearError = () => {
  errorText.textContent = '';
}

btnDeposit.addEventListener("click", calculateDepo);
