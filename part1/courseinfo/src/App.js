const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  )
}
const Content = (prop) => {
  return (
    <div>
      <Part part = {prop.part[0].name} exercise = {prop.part[0].exercise}/>
      <Part part = {prop.part[1].name} exercise = {prop.part[1].exercise}/>
      <Part part = {prop.part[2].name} exercise = {prop.part[2].exercise}/>

    </div>
  )
}
const Part = (prop) => {
  return(
  <p>{prop.part} {prop.exercise}</p>
  )
}
const Total = (prop) => {
  return (
    <p>Number of exercise {prop.total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }


  return (
    <div>
          <Header course = {course.name}/>
           <Content part = {course.part} />
           <Total total = {course.part[0].exercise + course.part[1].exercise + course.part[2].exercise}/>

    </div>
  )
}

export default App