const REGISTER_ENDPOINT = 'http://localhost:3000/users/create'

document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.querySelector('form')

  registerForm.addEventListener('submit', async function (event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const surname = document.getElementById('surname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('passwordConfirm').value

    if (password !== passwordConfirm) {
      alert('Passwords do not match!')
      return
    }

    try {
      const response = await axios.post(REGISTER_ENDPOINT, {
        name: name,
        surname: surname,
        email: email,
        password: password,
      })

      if (response.status === 201) {
        alert('Registration successful!')
        window.location.href = '/login.html'
      } else {
        alert('Registration failed. Please try again.')
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred during registration. Please try again.')
    }
  })
})
