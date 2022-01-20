// LOGIN FORM
const loginForm = document.querySelector('.register__form')
const emailErrors = document.querySelector('.email.error');
const passwordErrors = document.querySelector('.password.error');

loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault()

    // reset errors
    emailErrors.textContent = '';
    passwordErrors.textContent = '';

    // get the values 
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
        const res = await fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({email, password }),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await res.json()
        console.log(data)
        if (data.errors) {
            emailErrors.textContent = data.errors.email;
            passwordErrors.textContent = data.errors.password;
          }
        if (data.user) {
            location.assign('/');
        }
    } catch (err) {
        console.log(err)
    }
})