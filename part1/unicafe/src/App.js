import React, { useState } from 'react'

const Statistic = (props) => (
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <h1>{props.text}</h1>
        No feedback given
      </div>
    )
  }
    return (
      <div>
      <h1>{props.text}</h1>
      <table>
        <tbody>
          <Statistic text='good' value={props.good} />
          <Statistic text='neutral' value={props.neutral} />
          <Statistic text='bad' value={props.bad} />
          <Statistic text='all' value={props.good + props.neutral + props.bad} />
          <Statistic text='average' value={(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
          <Statistic text='positive' value={((props.good)/(props.good + props.neutral + props.bad))*100 + '%'} />
        </tbody>
        </table>
      </div>
    )
    
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <Statistics text="statistics" good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App