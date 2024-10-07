const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <Note note={notes[0]}></Note>
        <Note note={notes[1]}></Note>
        <Note note={notes[2]}></Note>
      </ul>
    </div>
  )
}

const Note = ({note}) => {
  <li>{note.content}</li>
}

export default App