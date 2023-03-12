;(function ($) {
  $('#reset').on('click', function () {
    $('#register-form').reset()
  })
})(jQuery)

let surnameValue
document.querySelector('#surname').addEventListener('change', function (e) {
  console.log(e.target.value)
  surnameValue = e.target.value
})

let othernameValue
document.querySelector('#other_name').addEventListener('change', function (e) {
  console.log(e.target.value)
  othernameValue = e.target.value
})

let phoneValue
document.querySelector('#phone').addEventListener('change', function (e) {
  console.log(e.target.value)
  phoneValue = e.target.value
})

let emailValue
document.querySelector('#email').addEventListener('change', function (e) {
  console.log(e.target.value)
  emailValue = e.target.value
})

let schoolValue
document.querySelector('#school').addEventListener('change', function (e) {
  console.log(e.target.value)
  schoolValue = e.target.value
})

let homeAddressValue
document.querySelector('#address').addEventListener('change', function (e) {
  console.log(e.target.value)
  homeAddressValue = e.target.value
})

let maleInputValue
document.querySelector('#male').addEventListener('click', function (e) {
  console.log(e.target.value)
  maleInputValue = e.target.value
})

let femaleInputValue
document.querySelector('#female').addEventListener('click', function (e) {
  console.log(e.target.value)
  femaleInputValue = e.target.value
})

let selectValue
document.querySelector('#class').addEventListener('click', function (e) {
  console.log(e.target.value)
  selectValue = e.target.value
})

const data = {
  surname: surnameValue,
  othersName: othernameValue,
  class: 'ss2',
  email: emailValue,
  gender: 'male',
  school: schoolValue,
  phone: phoneValue,
}

const fetchData = {
  method: 'POST',
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json; charset=UTF-8',
  }),
}

function handleSubmit() {
  fetch('https://golden-api-napf.onrender.com/api/v1/reg/student', fetchData)
    .then((res) => {
      console.log({ res })
    })
    .catch((error) => {
      console.log(error)
    })
}
