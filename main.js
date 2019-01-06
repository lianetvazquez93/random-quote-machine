$(document).ready(function() {
    var quotes = [
        {
            author: "John F. Kennedy",
            quote: "Those who dare to fail miserably can achieve greatly."
        },

        {
            author: "Leo Tolstoy",
            quote: "If you want to be happy, be."
        },

        {
            author: "Albert Einstein",
            quote: "If you want to live a happy life, tie it to a goal, not to people or things."
        },

        {
            author: "Wayne Gretzky",
            quote: "You miss 100 percent of the shots you never take."
        },

        {
            author: "Salvador Dali",
            quote: "Have no fear of perfection, you’ll never reach it."
        },

        {
            author: "John Lennon",
            quote: "Life is what happens when you're busy making other plans."
        },
        
        {
            author: "Mark Caine",
            quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."
        },
        
        {
            author: "Eleanor Roosevelt",
            quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people."
        },

        {
            author: "Joshua J. Marine",
            quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful."
        },

        {
            author: "Leonardo Da Vinci",
            quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
        }
    ];

    var currentQuote = '';
    var currentAuthor = '';

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max- min)) + min;
    }

    function getRandomQuote() {
        var idx = getRandomNumber(0, quotes.length);

        currentQuote = quotes[idx].quote;
        currentAuthor = quotes[idx].author;

        $("#text").html(quotes[idx].quote);
        $("#author").html(quotes[idx].author);
    }

    getRandomQuote();

    $("#new-quote").on("click", function() {
        getRandomQuote();
    });
    
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

});