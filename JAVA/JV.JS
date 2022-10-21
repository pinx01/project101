function checkpassword(){
    let password = document.getElementById("password").value;
    let cnfrmpassword = document.getElementById("cnfrm-password").value;
    console.log(password,cnfrmpassword);
    let message = document.getElementById("message")
    if(password.length<8){
     
            if(password == cnfrmpassword) {
     message.textContent = "passwords match";
     }
     else{
        message.textContent = "passwords don't match";
    }
    
    }
}
    