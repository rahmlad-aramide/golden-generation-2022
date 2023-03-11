;(function ($) {
  $('#reset').on('click', function () {
    $('#register-form').reset()
  })
})(jQuery)

// let surnameValue
// document.querySelector('#surname').addEventListener('change', function (e) {
//   console.log(e.target.value)
//   surnameValue = e.target.value
// })

function getInputBy(id) {
  let surnameValue
  document.querySelector(id).addEventListener('change', function (e) {
    // console.log(e.target.value)
    surnameValue = e.target.value
  })
  return { surnameValue }
}
console.log(getInputBy('#surname').surnameValue)

function getSurname() {
  console.log({ surnameValue })
  // surname.onchange = function (e) {
  //   console.log(e.target.value)
  // }
}
getSurname()
