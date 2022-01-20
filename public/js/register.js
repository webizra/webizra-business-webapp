// REGISTRATION FORM
const form = document.querySelector('.register__form')
const emailError = document.querySelector('.email.error');
const passwordError = document.querySelector('.password.error');

form.addEventListener('submit', async (e)=>{
    e.preventDefault()

    // reset errors
    emailError.textContent = '';
    passwordError.textContent = '';

    // get the values 
    const firstname = form.firstname.value;
    const surname = form.surname.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
        const res = await fetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                firstname: firstname,
                surname: surname,
                email: email,
                password: password,
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const data = await res.json()
        console.log(data)
        if (data.errors) {
            emailError.textContent = data.errors.email;
            passwordError.textContent = data.errors.password;
          }
        if (data.user) {
            location.assign('/');
        }
    } catch (err) {
        console.log(err)
    }
})