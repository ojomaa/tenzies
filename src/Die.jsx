import React from "react"


export default function Die(props) {
    return(
        <div className={`dice ${props.isHeld ? 'hold' : '' }`} onClick={props.holdDice}>
            <h2>{props.value}</h2>
        </div>
    )
}