const dialog = document.querySelector('.nav__modal')
const openDialog = document.querySelector('.nav__opendialog')
const closeDialog = document.querySelector('.nav__closemenu')

openDialog.addEventListener('click',() => dialog.show())
closeDialog.addEventListener('click',() => dialog.close())
