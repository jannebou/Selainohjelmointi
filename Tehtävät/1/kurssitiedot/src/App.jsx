const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>

      <Content 
        part1={course.parts[0]}
        part2={course.parts[1]}
        part3={course.parts[2]}/>

      <Total ex={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

const Total = (props) => {
  console.log("kutsutaan Total-komponenttia")
  var sum = props.ex[0] + props.ex[1] + props.ex[2]
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const Content = (props) => {
  console.log("kutsutaan Content-komponenttia")
  return (
    <div>
      <Part part={props.name} excercise={props.excercises}/>
      <p>{props.part} {props.content}</p>
    </div>
  )
}


const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.excercises}
    </p>
  )
}

const Header = (props) => {
  console.log("kutsutaan Header-komponenttia")
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

export default App