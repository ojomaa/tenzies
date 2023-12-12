import React from "react"


export default function Die(props) {
    return(
        <div className='dice'>
            <h2>{props.value}</h2>
        </div>
    )
}