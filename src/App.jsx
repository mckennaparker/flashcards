import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Card />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App
