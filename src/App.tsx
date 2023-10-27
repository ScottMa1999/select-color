import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // states
  const [color, setColor] = useState<string>('');
  const [choices, setChoices] = useState<string[]>([]);
  const [showCorrect, setShowCorrect] = useState<boolean>(false);

  // expressions
  const generateRandomColor = () => {
    const options = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    const randomColor = new Array(6).fill('').map(() => options[Math.floor(Math.random() * options.length)]).join('');
    return `#${randomColor}`;
  }

  const handleOnClick = (choice: string) => {
    if (color === choice) {
      setShowCorrect(true);
    }
    else {
      setShowCorrect(false);
    }
  }

  // effects
  useEffect(() => {
    // generate random color
    const correctChoice = generateRandomColor();
    setColor(correctChoice);
    setChoices([correctChoice, generateRandomColor(), generateRandomColor()]);
    setShowCorrect(false);
  },[])

  return (
    <section className='App'>
      <section className='Displaybox' style={{ backgroundColor: color }}></section>
      <section className='Buttons'>
        {
          choices?.map(choice => <button key={choice} onClick={() => handleOnClick(choice)}>{choice}</button>)
        }
      </section>
      <section className='Message'>
        { showCorrect && <h1>Correct!</h1> }
      </section>
    </section>
  )
}

export default App
