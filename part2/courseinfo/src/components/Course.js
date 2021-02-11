import React from 'react'

const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    parts.map(i =>
      <div key={i.id}>
        <Part part={i.name} exercises={i.exercises} />
      </div>)
  )
}

const Total = ({ parts }) => {
  const sum = parts.map(part => part.exercises).reduce((a,b) => a + b) 
  return (
    <p>
      Total of <b>{sum}</b> exercises
    </p>
  )
}

const Course = ({ course }) => {
  return (
    course.map(i =>
      <div key={i.id}>
        <Header name={i.name} />
        <Content parts={i.parts} />
        <Total parts={i.parts} />
        </div>)
  )
}

export default Course