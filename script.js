var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

const quoteGenerator = async () => {
    // get an API url
    const url = "https://type.fit/api/quotes";
    //fetch that url API
    const response = await fetch(url);
    //convert the fetch API to json
    const quotes = await response.json();
    console.log(quotes);

    const randomIndex = Math.floor(Math.random() * quotes.length);
    //get the random quote text from JSON quotes array
    const quote = quotes[randomIndex].text;
    console.log(quote);

    //get the random quote text authro from JSON quotes array 
    const author = quotes[randomIndex].author;
    console.log(author);

    if (author == "") {
        author = null;
    }
    
    //display the quote and the author to page
    $('#quote').html(quote);
    $('#author').html(author);

    //changing the random bg color and the text color
    const randomColors=Math.floor(Math.random()* colors.length);

    $('body').css("background-color",colors[randomColors]);
    $('body').css("color",colors[randomColors]);
    $('body #newQuote').css("background-color",colors[randomColors]);

}

quoteGenerator();
//generating function quoteGenerator when the new quote button is clicked
$('#newQuote').click(quoteGenerator);

