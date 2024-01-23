import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [pepperoni, setPepperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [peppers, setPeppers] = useState(false);
  const [onions, setOnions] = useState(false);

  return (
    <div className="App">
      <div className='Card'>
        <h1>Pizza Order</h1>
        <div className="Order">
          <form className="Form">
            <input
              type="text"
              value={name}
              placeholder='name'
              onChange={(e) => setName(e.target.value)}/>
            <label>
              <input
                type="checkbox"
                checked={pepperoni}
                onChange={() => setPepperoni(!pepperoni)}/>
              Pepperoni
            </label>
            <label>
              <input
                type="checkbox"
                checked={sausage}
                onChange={() => setSausage(!sausage)}/>
              Sausage
            </label>
            <label>
              <input
                type="checkbox"
                checked={peppers}
                onChange={() => setPeppers(!peppers)}/>
              Peppers
            </label>
            <label>
              <input
                type="checkbox"
                checked={onions}
                onChange={() => setOnions(!onions)}/>
              Onions
            </label>
            <button type="submit">Submit</button>
          </form>
          <div className="Summary">
            <h2>Your Order</h2>
              <h3>{name}</h3>
              {pepperoni && <p>Pepperoni</p>}
              {sausage && <p>Sausage</p>}
              {peppers && <p>Peppers</p>}
              {onions && <p>Onions</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
