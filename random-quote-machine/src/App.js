import './App.css';
import React, { Fragment, useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState(null)
  const [random, setRandom] = useState(0)

  // fetching data

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setData(data);
      // set random state to random number for random quote when page first loads
      setRandom(Math.floor(Math.random() * data.length));
    }
    fetchData()
  }, [])
  // when button is clicked not next quote but random should display
  const onChange = () => {
    let randData = Math.floor(Math.random() * data.length)
    setRandom(randData)
  }
  return (
    <Fragment>
      <div id="quote-box" className='text-center mx-auto'>
        {data ? (
          <>
            <div className='row'>
              <div style={{ display: 'flex' }}>
                <i className="fa fa-quote-left fa-3x col-sm" />
                <p id="text" className='col-sm'>{data[random].text}</p>
              </div>
            </div>
            <h4 id="author"><strong>- {data[random].author}</strong></h4>
            <a target="_blank" title='Tweet this quote!' rel="noopener noreferrer" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Nothing%20is%20impossible%2C%20the%20word%20itself%20says%2C%20%E2%80%9CI%E2%80%99m%20possible!%E2%80%9D%22%20%E2%80%93Audrey%20Hepburn" id="tweet-quote"><i className="fa-brands fa-twitter fa-2x"></i></a>
            <button id="new-quote" className='btn btn-dark' onClick={onChange}><strong>New Quote</strong></button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Fragment>
  );
}

export default App;
