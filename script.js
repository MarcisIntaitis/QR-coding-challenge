
var apiUrl = "https://api.adviceslip.com/advice";
fetch (apiUrl).then(response => {
    return response.json();
}).then(data => {
    console.log(data.slip.advice);
    document.getElementById('affirmation-text').innerText = data.slip.advice
}).catch(err => {
    throw err
});