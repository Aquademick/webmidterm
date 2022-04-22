fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": 'f7bd978bf8msh81fbd5a48923492p137acajsna27cd80ca42f'
    }
})
    .then(response => response.json())
    .then(response => {
        console.log(response);

        document.getElementById('quote').innerHTML = response.content;
        document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
    })
    .catch(err => {
        console.log(err);
    });