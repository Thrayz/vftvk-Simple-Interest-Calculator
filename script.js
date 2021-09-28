function compute()
{
//Getting the values from the user
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    
//Validate positive amount 
    if (principal < 1 || principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

//Calculating the interest
    var interest = principal * years * rate / 100;

//Calculating the year
    var year = new Date().getFullYear()+parseInt(years);
    
//Displaying the result of the calculation
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

}

//Updating the rate value when the slider is changed
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

