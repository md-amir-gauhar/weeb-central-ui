const emailInput = document.querySelector('input[name="email"]')
const emailLabel = document.querySelector('.email-label')
const passwordInput = document.querySelector('input[name="pwd"]')
const passwordLabel = document.querySelector('.pwd-label')

console.log(emailInput.nodeValue)

emailInput.addEventListener("focus", e => {
  emailLabel.classList.add('shrink')
})

emailInput.addEventListener("blur", e => {
  if (!emailInput.value.length === 0) return
  emailLabel.classList.remove("shrink")
})

emailInput.addEventListener("input", e => {
  if (emailInput.value.length === 0) {
    return
  } else {
    emailLabel.classList.add('shrink')
  }
})



passwordInput.addEventListener("focus", e => {
  passwordLabel.classList.add('shrink')
})

passwordInput.addEventListener("blur", e => {
  if (!passwordInput.value.length === 0) return
  passwordLabel.classList.remove('shrink')
})

passwordInput.addEventListener("input", e => {
  if (passwordInput.value.length === 0) {
    return
  } else {
    passwordLabel.classList.add('shrink')
  }
})