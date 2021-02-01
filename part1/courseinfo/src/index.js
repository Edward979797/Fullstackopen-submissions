import React,{ useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <h1>give feedback</h1>
      <button>{props.name}</button>
      <button>{props.name}</button>
      <button>{props.name}</button>
    </div>
  )
}

const Statistics = () => {

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState (0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name='good' />
      <Button name='neutral' />
      <Button name='bad' />
      <Statistics />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))