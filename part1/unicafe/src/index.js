import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ( { name, number }) => {
  return (
    <tr>
      <td>{name} {number}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    return (
      setGood(good + 1)
    )
  }

  const handleNeutralClick = () => {
    return (
      setNeutral(neutral + 1)
    )
  }

  const handleBadClick = () => {
    return (
      setBad(bad + 1)
    )
  }

  if (good + bad + neutral === 0) {
    return (
      <div>
      <Display title='give feedback' />
      <Button text='good' handleClick={handleGoodClick} />
      <Button text='neutral' handleClick={handleNeutralClick} />
      <Button text='bad' handleClick={handleBadClick} />
      <Display title='statistics' />
      No feedback given
      </div>
    )
  } else {
  return (
    <div>
      <Display title='give feedback' />
      <Button text='good' handleClick={handleGoodClick} />
      <Button text='neutral' handleClick={handleNeutralClick} />
      <Button text='bad' handleClick={handleBadClick} />
      <Display title='statistics' />
      <table>
        <tbody>
      <Statistics name='good' number={good} />
      <Statistics name='neutral' number={neutral} />
      <Statistics name='bad' number={bad} />
      <Statistics name='total' number={good + bad + neutral} />
      <Statistics name='average' number={(good - bad) / (good + bad + neutral)} />
      <Statistics name='positive' number={(good / (good + bad + neutral)) * 100 + '%'} />
      </tbody>
      </table>
    </div>
  )
}

}



ReactDOM.render(<App />, document.getElementById('root'))