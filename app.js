//listen for sumbmit
document.getElementById("loan-form").addEventListener('submit', calculateResult);



function calculateResult(e) {


    const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById('interest');
    const UIyears = document.getElementById('years');
    const UImonthlyPayment = document.getElementById('monthly-payment');
    const UItotalPayment = document.getElementById('total-payment');
    const UItotalInterest = document.getElementById('total-interest');
 

    const principal = parseFloat(amount.value);
    const calcIntrest = parseFloat(interest.value) / 100 / 12;
    const calcPayments = parseFloat(years.value) * 12;

    e.preventDefault();
}  