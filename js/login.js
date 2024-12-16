document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    

    if (!email.includes('@')) {
        alert("@ is missing");
        return;
    }
    if (password.length < 6) {
        alert("please put  strong password")
        return;
    }
    
 alert("login sucessfull");
    document.getElementById('loginform').reset();
    window.location.href='index.html';
});