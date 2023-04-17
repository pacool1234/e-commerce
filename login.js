const REGISTER_ENDPOINT = 'http://localhost:3000/users/login'

document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.querySelector('form')

  registerForm.addEventListener('submit', async function (event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    try {
      const response = await axios.post(REGISTER_ENDPOINT, {
        email: email,
        password: password,
      })

      if (response.status === 201) {
        alert('Login successful!')
        window.location.href = '/home.html'
      } else {
        alert('Incorrect email/password. Please try again.')
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred during login. Please try again.')
    }
  })
})
