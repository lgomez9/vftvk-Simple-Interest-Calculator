// Function that gets the principal amount, the interest rate, and the number of years, and prints the amount saved.
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + interest;

    // Validating the number entered into the principal field.
    if(principal <= 0) {
      alert("Enter a positive number")
      document.getElementById("principal").focus();
    }

    // If number entered is valid, get the interest and return it.
    else {
      document.getElementById("result").innerHTML = "If you deposit <mark>" + principal
        + "</mark>,\<br\>at an interest rate of <mark>" + rate +
        "%</mark>\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>"
        + year + "</mark>\<br\>";
    }
}

// Updates the rate dynamically as the slider moves.
function updateRate() {
  var rateval = document.getElementById("rate").value;
  console.log(rateval);
  document.getElementById("rate_val").innerText = rateval;
}
