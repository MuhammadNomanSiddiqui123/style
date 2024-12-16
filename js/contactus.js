document.getElementById('contactform').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name');
    var name = document.getElementById('lastname');
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
   

    

    if (!email.includes('@')) {
        alert("@ is missing");
        return;
    }
    
    // if (mobile.length = 11) {
    //     alert("please put  valid mobile")
    //     return;
    // }
   alert("contact sucessfull");
    document.getElementById('contactform').reset();
   window.location.href='index.html';

});