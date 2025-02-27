document.getElementById("cashout-btn").addEventListener("click",
function(event){
event.preventDefault();
const accountNumber = document.getElementById("cashout-account-number").value;
const pin = document.getElementById("cashout-pin").value;
const convertedPin = parseInt(pin);
const amount=document.getElementById("cashout-amount").value;
convertedAmount = parseFloat(amount);
const mainBalance= document.getElementById("main-balance").innerText;
const convertedMainBalance = parseFloat(mainBalance);

if(amount && pin){
    console.log({accountNumber})
if(accountNumber==="01301301302"){
    if(convertedPin===1234){
        const sum = convertedMainBalance - convertedAmount;
        document.getElementById("main-balance").innerText = sum;
    }
    else{
        alert("enter valid pin")
    }
}

else{
    alert("enter valid account-number")
}
}
else{
    alert("enter cashout amount")
}
})
