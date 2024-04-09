document.addEventListener('DOMContentLoaded', function() {
    const passIn = document.getElementById('password');
    const btnOn = document.getElementById('togglePasswordOn');
    const btnOff = document.getElementById('togglePasswordOff');
    
    btnOn.addEventListener('click', function() {
        const type =
            passIn.getAttribute('type') ===
                'password' ? 'text' : 'password';
        passIn.setAttribute('type', type);
        btnOn.classList.add("hidden");
        btnOff.classList.remove("hidden");
    });

    btnOff.addEventListener('click', function() {
        const type =
            passIn.getAttribute('type') ===
                'password' ? 'text' : 'password';
        passIn.setAttribute('type', type);
        btnOff.classList.add("hidden");
        btnOn.classList.remove("hidden");
    });
    
    const loginForm = document.getElementById('loginForm');
    
    // loginForm.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     loginForm.reset(); //Reset the form
    //     //alert('Form submitted');
    // });
});
