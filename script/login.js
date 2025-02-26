document.getElementById('login-btn').addEventListener("click",
     function (event){
        event.preventDefault();
     const accountNumber = document.getElementById("Account-number").value;
    const pin = document.getElementById("pin").value;
    if(accountNumber.length===11){
        if(pin==="1234"){
            console.log("okay tikh ache")
            window.location.href="./main.html"
        }
        else{
           alert("pin tikh nai")

        }
        
    }
    else{
        alert("need valid acount number")
    }
})