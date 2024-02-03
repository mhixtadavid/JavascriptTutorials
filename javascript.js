const generateFamousQuote = function() {
  const Quotes = [
    {
      quote: "The only way to do great work is to love what you do. - Steve Jobs"
    },

    {
      quote: "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost"
    },

    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
    },

    {
      quote: "Be yourself; everyone else is already taken. - Oscar Wilde"
    },

    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
    },

    {
      quote: "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis"
    },

    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein"
    },

    {
      quote: "The only thing we have to fear is fear itself. - Franklin D. Roosevelt"
    },

    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
    },

    {
      quote: "The only impossible journey is the one you never begin. - Tony Robbins"
    }
  ];

  let arrayIndex = Math.floor(Math.random() * Quotes.length);
  document.getElementById("quote").innerHTML = Quotes[arrayIndex].quote
}

window.onload = function() {
  generateFamousQuote();
  document.getElementById("quoteGeneration").addEventListener('click', generateFamousQuote);
}

