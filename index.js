/*
1.Write the following JavaScript in your index.js file

2.Create a function that will be called when the user 
clicks on the button element you added to your HTML.

3.This function should grab the values entered by the user
 from the input elements and the select element.

4.The function should then calculate the monthly payment as 
follows (we can break this formula into 4 'buckets' for 
readability):
*/

$(document).ready(function() {


 

$("#main_button").click(function calculateMortgage() {
	var balance = $("#loanbalance").val()
	var percentagerate = $("#apr").val()
	var term = $("#loanterm").val()
	var howlong = $("#period option:selected").val()

	var numberOfPayments = term * howlong;
	var monthlyInterestRate = (percentagerate / 100) / howlong;
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
	var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
	var monthlyPayment = Math.round((balance * interestQuotient) * 100) / 100;

	$("#mortgageamount").html("Your Monthly Mortgage Rate Will Be " + "$" + monthlyPayment + " dollars");

	});

});
