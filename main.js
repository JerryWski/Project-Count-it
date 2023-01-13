let amountInput = document.querySelector("#amount");
let rateInput = document.querySelector("#rate");
let monthInput = document.querySelector("#month");
const btnDeposit = document.querySelector(".calcuate-btn-depo");
const btnInvestment = document.querySelector(".calcuate-btn-invest");
const interestAmountDepo = document.querySelector(".total-interest-depo");
const totalAmountDepo = document.querySelector(".total-amount-depo");
const interestAmountInvest = document.querySelector(".total-interest-invest");
const totalAmountInvest = document.querySelector(".total-amount-invest");

let interest;

let calculateDepo = () => {
    
  let principal = amountInput.value;
  let rate = rateInput.value / 100 / 12;
  let month = monthInput.value;
  
  if(month == 1) {
    interest = (principal * rate * month )* 12;
    console.log(interest);
  }else if (month == 2) {
    interest = (principal * rate * month )* 6;
    console.log(interest);
  }else {
    console.log('wprowadz poprawny okres');
    return
  }
};

btnDeposit.addEventListener("click", calculateDepo);
