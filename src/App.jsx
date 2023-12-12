import React from "react"
import Confetti from "react-confetti"
import Die from "./Die"

export default function App() {

  // States
  const [diceNum, setDiceNum] = React.useState(allNewDice())

  // Effects

  // Functions
  function allNewDice() {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6))
  }

  const diceNumbers = diceNum.map((num, index) => (
        <Die key={index} value={num} />
    ))

  return (
    <main>
      <div className='dice-container'>
        {diceNumbers}
      </div>
    </main>
  )
}
