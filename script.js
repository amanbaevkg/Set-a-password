function showPwd(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {
        x.type = "text";
        el.className = 'fa fa-eye-slash showpwd';
    } else {
        x.type = "password";
        el.className = 'fa fa-eye showpwd';
    }
}
let input = document.getElementById('pass')
let incorectValue = document.createElement("span");

function srav(){
    let passwd = document.getElementById('passwd');
    let pass = document.getElementById('pass');
    if (passwd.value === pass.value){
        alert ("You are welcome!");
    } else {
        incorectValue.innerText = "You nned to enter the same value!";
        input.after(incorectValue);
    }
}
