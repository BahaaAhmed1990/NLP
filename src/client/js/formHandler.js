const url = require('valid-url');
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checkForName(formText)
    console.log("::: Form Submitted :::")

    if(url.isUri(formText)){
        fetch('http://localhost:8081/text/'+formText).then(response => response.json())
        .then((response) => {
        // console.log(status)
        // console.log(body)
        if(response.status.msg === 'OK'){
            document.getElementById('confidence').innerText = response.confidence
            document.getElementById('subjectivity').innerText = response.subjectivity
        } else {
            document.getElementById('err-msg').innerText = 'Sorry,Error please try again'
        }
    })
    } else {
        document.getElementById('err-msg').innerText = 'Please, enter a valid url address'
    }
}

export { handleSubmit }