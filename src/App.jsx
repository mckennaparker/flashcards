import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState("question");

  const cardsList = [
    { id: 1, question: "What is a long throw, usually over 30 yards, called?", answer: "Huck", difficulty: "easy" },
    { id: 2, question: "What is it called when a player gets a block and then scores on the same possession?", answer: "Bookends", difficulty: "medium" },
    { id: 3, question: "What is a score that happens when a defender intercepts a pass in their attacking endzone?", answer: "Callahan", difficulty: "hard" },
    { id: 4, question: "What is a short pass, often thrown as a reset?", answer: "Dish", difficulty: "medium" },
    { id: 5, question: "What is a diving attempt to catch or block the disc?", answer: "Layout/Bid", difficulty: "hard"},
    { id: 6, question: "What is the initiating throw of a point?", answer: "Pull", difficulty: "easy" },
    { id: 7, question: "What is a turnover caused by the thrower failing to release the disc within ten seconds?", answer: "Stall", difficulty: "medium" },
    { id: 8, question: "What is it called when you catch the disc over an opposing player?", answer: "Sky", difficulty: "hard" },
    { id: 9, question: "Who are the players that initiate the offensive play and are mainly in the backfield on offense?", answer: "Handlers", difficulty: "medium" },
    { id: 10, question: "What is the violation when multiple players are within a ten-yard radius of the thrower?", answer: "Double Team", difficulty: "easy" },
  ];

  const currentCard = cardsList[count];

  return (
    <div className="App">
      <div className="header">
        <h1>Frisbee Flashcards</h1>
        <h4>Test your knowledge of common ultimate frisbee terms</h4>
        <p>Number of Cards: {cardsList.length}</p>
        <p>Current Card: {currentCard.id}</p>
      </div>
      <div className="card-container" onClick={() => setState(state === "question" ? "answer" : "question")}>
        { state === "question" ? (
          <div className="card-question">
            <Card key={currentCard.id} type="question" question={currentCard.question} difficulty={currentCard.difficulty} />
          </div>
        ) : (
          <div className="card-answer">
            <Card key={currentCard.id} type="answer" answer={currentCard.answer} difficulty={currentCard.difficulty} />
          </div>
        )}
      </div>
      <div className="buttons">
        <button onClick={() => {setCount(count > 0 ? count - 1 : 0); setState("question")}}>⬅️</button>
        <button onClick={() => {setCount(count < 9 ? count + 1 : 9); setState("question")}}>➡️</button>
      </div>
    </div>
  )
}

export default App
