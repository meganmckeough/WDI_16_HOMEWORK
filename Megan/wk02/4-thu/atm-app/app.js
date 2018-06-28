var savingsInput = document.querySelector('.savings-amount');
var checkingInput = document.querySelector('.checking-amount');


function withdrawAmountSavings () {
	var currentSavingsBalance = Number(document.querySelector('.savings-balance').innerHTML);
	var newBalance = currentSavingsBalance - Number(savingsInput.value);
	if (currentSavingsBalance >= Number(savingsInput.value)) {
		document.querySelector('.savings-balance').innerHTML = newBalance.toFixed(2);		
	} else {
		alert("Not enough money!");
	};
	if (newBalance >= 1) {
		document.querySelector('.savings-atm').style.backgroundColor = 'lightgrey';
	} else {
		document.querySelector('.savings-atm').style.backgroundColor = 'red';
	}
};

function depositAmountSavings () {
	var currentSavingsBalance = Number(document.querySelector('.savings-balance').innerHTML);
	var newBalance = currentSavingsBalance + Number(savingsInput.value);
	document.querySelector('.savings-balance').innerHTML = newBalance.toFixed(2);
	if (newBalance >= 1) {
		document.querySelector('.savings-atm').style.backgroundColor = 'lightgrey';
	} else {
		document.querySelector('.savings-atm').style.backgroundColor = 'red';
	}
};

function withdrawAmountChecking () {
	var currentCheckingBalance = Number(document.querySelector('.checking-balance').innerHTML);
	var newBalance = currentCheckingBalance - Number(checkingInput.value);
	if (currentCheckingBalance >= Number(checkingInput.value)) {	
		document.querySelector('.checking-balance').innerHTML = newBalance.toFixed(2);	
	} else {
		alert("Not enough money!");
	}
	if (newBalance >= 1) {
		document.querySelector('.checking-atm').style.backgroundColor = 'lightgrey';
	} else {
		document.querySelector('.checking-atm').style.backgroundColor = 'red';
	}
};

function depositAmountChecking () {
	var currentCheckingBalance = Number(document.querySelector('.checking-balance').innerHTML);
	var newBalance = currentCheckingBalance + Number(checkingInput.value);
	document.querySelector('.checking-balance').innerHTML = newBalance.toFixed(2);
	if (newBalance >= 1) {
		document.querySelector('.checking-atm').style.backgroundColor = 'lightgrey';
	} else {
		document.querySelector('.checking-atm').style.backgroundColor = 'red';
	}
};

document.querySelector('#savings-withdraw-btn').addEventListener('click', withdrawAmountSavings);
document.querySelector('#savings-deposit-btn').addEventListener('click', depositAmountSavings);
document.querySelector('#checking-withdraw-btn').addEventListener('click', withdrawAmountChecking);
document.querySelector('#checking-deposit-btn').addEventListener('click', depositAmountChecking);

// Keep track of the checking and savings balances somewhere
// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account