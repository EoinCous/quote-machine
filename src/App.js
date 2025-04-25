import './App.css';

function App(){
  return(
    <div className="App-header" id="quote-box">
      <p id="text">What doesn't kill you makes you stronger</p>
      <p id="author">Fredrick Nietsche</p>
      <button id="new-quote">Click for a new quote</button>
      <a 
        id="new-quote" 
        className="App-link"
        href="https://example.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Share on twitter
      </a>
    </div>
  )
}

export default App;
