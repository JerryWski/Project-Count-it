const amountInput = document.querySelector("#amount");
const rateInput = document.querySelector("#rate");
const monthInput = document.querySelector("#month");

const btnDeposit = document.querySelector(".calcuate-btn-depo");
const btnInvestment = document.querySelector(".calcuate-btn-invest");
const interestAmountDepo = document.querySelector(".total-interest-depo");
const totalAmountDepo = document.querySelector(".total-amount-depo");
const interestAmountInvest = document.querySelector(".total-interest-invest");
const totalAmountInvest = document.querySelector(".total-amount-invest");

let calculateDepo = () => {
  let principal = amountInput.value;
  let rate = (rateInput.value / 100);
  let month = monthInput.value;

  let interest;
  if (month == 1) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  } else if (month == 2) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }else if(month == 3) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }else if (month == 4) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }
  else if (month == 5) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }
  else if (month == 6) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }
  else if (month == 7) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }
  else if (month == 8) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }
  else if (month == 9) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }
  else if (month == 10) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }
  else if (month == 11) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }
  else if (month == 12) {
    interest = (principal * rate) * (month / 12);
    console.log(interest);
  }
  else {
    console.log("enter a range of 1 to 12 months");
    
  }
};

btnDeposit.addEventListener("click", calculateDepo);
