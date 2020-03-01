//listen for sumbmit
document.getElementById("loan-form").addEventListener('submit', function (e) {

    //hide result
    document.getElementById('results').style.display = 'none';

    //show loading
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResult, 2000);

    e.preventDefault();
});



function calculateResult() {


    const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById('interest');
    const UIyears = document.getElementById('years');
    const UImonthlyPayment = document.getElementById('monthly-payment');
    const UItotalPayment = document.getElementById('total-payment');
    const UItotalInterest = document.getElementById('total-interest');
  

    const principal = parseFloat(UIamount.value);
    const calcIntrest = parseFloat(UIinterest.value) / 100 / 12;
    const calcPayments = parseFloat(UIyears.value) * 12;

    //monthly payment calculation
 
    const x = Math.pow(1 + calcIntrest, calcPayments);
    const monthly = (principal*x*calcIntrest)/(x-1);


    if(isFinite(monthly)) {
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly * calcPayments).toFixed(2);
        UItotalInterest.value = ((monthly * calcPayments) - principal).toFixed(2)

        //show result
        document.getElementById('results').style.display = 'block';
        
        //hide loader
        document.getElementById("loading").style.display = 'none';


    }else {
        showError('Please Enter Valid Numbers')
    }
}  


function showError(error) {

    //hide result
    document.getElementById('results').style.display = 'none';
        
    //hide loader
    document.getElementById("loading").style.display = 'none';


    // create div
    const errorDiv = document.createElement('div');

    //get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';

    //textnode
    errorDiv.appendChild(document.createTextNode(error))

    //inserterror above heading
    card.insertBefore(errorDiv, heading)

    // clear error after 3sec
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000)
}