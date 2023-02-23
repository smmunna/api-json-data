const blockQuotes = () =>{
    fetch('https://api.kanye.rest/')
        .then(res=> res.json())
        .then(data=> displayQuotes(data));
}
const displayQuotes = (quotes) =>{
    const blockquotes = document.getElementById('quotes');
    blockquotes.innerHTML = quotes.quote;
}

blockQuotes();