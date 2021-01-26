import { useState } from 'react'

const App = () => {

  const [text, setText] = useState('Insira seu texto aqui');

  const handleText = (event) => setText(event.target.value)

  return <div>
    <h1>{text}</h1>
    <input placeholder="Insira seu texto aqui" onChange={handleText}></input>
  </div>
}

export default App; 