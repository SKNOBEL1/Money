document.getElementById('add-money').addEventListener("click",
    function(event) {
        event.preventDefault();
       
        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);
        const accountNumber = document.getElementById("Account-number").value;
        const amount= document.getElementById("Amount").value;
        const convertedAmount = parseFloat(amount);
      const mainBalance= document.getElementById("main-balance").innerText;
      const convertedMainBalance = parseFloat(mainBalance);

      if(amount && pin){
       if(accountNumber==="01301301302"){
        if (convertedPin===1234) {
          const sum = convertedMainBalance + convertedAmount;
          document.getElementById("main-balance").innerText = sum;
        }
        else{
          alert("wrong  pin")
        }
       }
       else{
        alert("enter valid account-number")
       }

      }
      else{
        alert("enter amount")
      }
})
