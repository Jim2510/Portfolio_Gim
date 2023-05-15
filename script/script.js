const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
};

// function sendMail() {
//   var params = {
//     from_name : document.getElementById('fullName').value,
//     email_id : document.getElementById('email_id').value,
//     message : document.getElementById('message').value,
//     phone_number : document.getElementById('phone_number').value
//   }
//   emailjs.sendForm('service_5r2ot1w', 'template_urfoice', params).then(function (res){
//     alert('success!' + res.status)
//   })
// }

