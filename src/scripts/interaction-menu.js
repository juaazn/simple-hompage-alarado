const dialogTag = document.querySelector('.modal')
const openDialog = document.querySelector('.nav__opendialog')
const closeDialog = document.querySelector('.nav__closemenu')

openDialog.addEventListener('click',() => dialogTag.show())
closeDialog.addEventListener('click',() => dialogTag.close())
