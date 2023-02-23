const blockQuotes = () =>{
    fetch('https://api.kanye.rest/')
        .then(res=> res.json())
        .then(data=> displayQuotes(data));
}
const displayQuotes = (quotes) =>{
    console.log(quotes)
}

blockQuotes();