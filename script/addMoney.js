document.getElementById('add-money').addEventListener('click',
    function(event) {
      event.preventDefault();
      const amount= document.getElementById("Amount").value;
      const convertedAmount = parseFloat(amount);
      const account = document.getElementById(" Account-number").value;
      const pin = document.getElementById("pin").value;
      const convertedPin = parseInt(pin);
    const mainBalance= document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    
  if(account.length===11){
    if (convertedPin===1234){
      const sum= mainBalance + amount;
      document.getElementById("main-balance").innerText= sum;
    }
    else{
      console.log("pin shotik na")
    }
  }
  else{
    console.log("account number thik nai")
  }
    })
   