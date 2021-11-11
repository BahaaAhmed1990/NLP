const url = require('valid-url');

function checkUrl(str){
    return url.isUri(str) ? true : false
}

export { checkUrl }