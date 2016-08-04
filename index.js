

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



	$("#mortgageamount").html("Your Mortgage Rate Will Be " + "$" + monthlyPayment + " Dollars/Month");



	});
	

});
