function func(){
    var email = document.getElementById("username").value;
    var pass = document.getElementById('password').value;
    if (email == 'beetie_kay' && pass == '0902579ghetto'){
     alert("success full !")
        window.location.assign("des.html")
    }
    else{
        alert("Wrong entry invalid")
    }
}