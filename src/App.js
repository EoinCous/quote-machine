import { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  { quote: "The unexamined life is not worth living.", author: "Socrates" },
  { quote: "I think, therefore I am.", author: "René Descartes" },
  { quote: "Happiness is not an ideal of reason but of imagination.", author: "Immanuel Kant" },
  { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { quote: "Man is condemned to be free.", author: "Jean-Paul Sartre" },
  { quote: "Liberty consists in doing what one desires.", author: "John Stuart Mill" },
  { quote: "One cannot step twice in the same river.", author: "Heraclitus" },
  { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  { quote: "Life must be understood backward. But it must be lived forward.", author: "Søren Kierkegaard" },
  { quote: "The mind is furnished with ideas by experience alone.", author: "John Locke" },
  { quote: "What doesn't kill you makes you stronger.", author: "Friedrich Nietzsche" }
];

function App(){
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  // Runs once on component mount
  useEffect(() => {
    generateQuote();
  }, []);

  return(
    <div className="App-header" id="quote-box">
      <h2 id="text">{quote.quote}</h2>
      <h3 id="author">{quote.author}</h3>
      <button id="new-quote" onClick={generateQuote}>Click for a new quote</button>
      <a 
        id="tweet-quote" 
        className="App-link"
        href="twitter.com/intent/tweet" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Share on twitter
      </a>
    </div>
  )
}

export default App;
