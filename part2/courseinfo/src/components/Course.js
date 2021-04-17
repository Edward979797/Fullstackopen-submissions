import React from 'react'

const Total = ({ parts }) => {
  const total = parts.map(part => part.exercises)
                .reduce((s, p) => s + p)
  
  return (
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Part = ({ name, exercises, id }) => {
  return (
    <p key={id}>{name} {exercises}</p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Header = ({ name }) => <h1>{name}</h1>

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course