import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ name }) => {
  return (
    <h1>{name}</h1>
  )
}

const Display = ({ anecdotes, number, votes }) => {
  return (
    <div>
      {anecdotes[number]}
      <div>has {votes} votes</div>
    </div>
  )
}

const Button = ({ handleClick, handleVoteClick }) => {
  return (
    <div>
    <button onClick={handleVoteClick}>vote</button>
    <button onClick={handleClick}>next anecdote</button>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  const [highest, setHighest] = useState(0)

  const copy = {...points}

  const handleClick = () => {
    return (
      setSelected(Math.floor(Math.random() * props.anecdotes.length))
    )
  }

  const handleVoteClick = () => {
      copy[selected] += 1;
      setPoints(copy);
      if (points[selected] >= points[highest]) {
        setHighest(selected)
  }
}

  return (
    <div>
      <Title name='Anecdote of the day' />
      <Display anecdotes={anecdotes} number={selected} votes={points[selected]} />
      <Button handleClick={handleClick} handleVoteClick={handleVoteClick} />
      <Title name='Anecdote with most votes' />
      <Display anecdotes={anecdotes} number={highest} votes={points[highest]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
