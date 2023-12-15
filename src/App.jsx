import React from "react"
import Confetti from "react-confetti"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {

  // States //
  const [diceNum, setDiceNum] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  // Variables //
  const diceNumbers = diceNum.map((die) => (
    <Die 
      key={die.id} 
      value={die.number}
      isHeld={die.isHeld}
      holdDice = {() => holdDice(die.id)}
    />
))

  // Effects //

  React.useEffect(()=> {
    const allHeld = diceNum.every(die => die.isHeld)
    const firstValue = diceNum[0].value
    const allSameValue = diceNum.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
  }, [diceNum])

  // Functions //

  function generateDice() {
    return {
        number: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}
  function allNewDice() {

    return Array.from({ length: 10 }, () => {
      return generateDice()
    })
  }

  function rollDice() {
    setDiceNum(oldDice => oldDice.map(dice => {
        return dice.isHeld ? dice : generateDice()
        }
    ))
}

  function holdDice(id) {
    setDiceNum(oldDice => oldDice.map(die => {
      return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
  }))
  }

  function newGame() {
    setDiceNum(allNewDice())
    setTenzies(false)
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceNumbers}
      </div>
      { tenzies ?
        <button className="roll-button" onClick={newGame}> New Game</button> :
        <button className="roll-button" onClick={rollDice}>Roll</button>
      }
    </main>
  )
}
