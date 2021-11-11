import { checkUrl } from './urlChecker'
function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('err-msg').innerText = ''
    // check what text was put into the form field
    let inputUrl = document.getElementById('name').value
    // checkForName(inputUrl)
    console.log("::: Form Submitted :::",inputUrl)

    if(checkUrl(inputUrl)){
        fetch('http://localhost:8081/text',{
            method:'POST',
            mode:'cors',
            credentials:'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url:inputUrl})
        }).then(response => response.json())
        .then((response) => {
        console.log(response)
        // console.log(body)
        if(response.status.msg === 'OK'){
            document.getElementById('confidence').innerText = 'The confidence is :' + response.confidence
            document.getElementById('subjectivity').innerText = 'The subjectivity is :' + response.subjectivity
        } else {
            document.getElementById('err-msg').innerText = 'Sorry,Error please try again'
        }
    }).catch((err) =>{
        console.log(err)
        document.getElementById('err-msg').innerText = 'Sorry,Error please try again'
    })
    } else {
        document.getElementById('err-msg').innerText = 'Please, enter a valid url address'
    }
}

export { handleSubmit }