import { handleSubmit } from './js/formHandler'
import { checkForName } from './js/nameChecker'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

// console.log(checkForName);


window.addEventListener('DOMContentLoaded', () => {
    alert("I EXIST")
    console.log('from window')
    document.getElementById('submit-btn').addEventListener('click', handleSubmit);
  })

export {
   handleSubmit,
   checkForName
}