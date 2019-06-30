import React, { useState } from "react"

const ScoreCounter = ({style = {}}) => {
  const [counter, setCounter] = useState(0);
  return (
    <span style={style}>
            <span onClick={() => setCounter(counter - 1)}><span role="img">🔽</span></span>
            {counter}
            <span onClick={() => setCounter(counter + 1)}><span role="img">🔼</span></span>
    </span>
  )
}

export default ScoreCounter