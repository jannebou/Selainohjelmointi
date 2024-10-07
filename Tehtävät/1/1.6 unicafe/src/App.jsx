import { useState } from 'react'

const Statistics = (props) => {
  const good = props.lista[0];
  const neutral = props.lista[1];
  const bad = props.lista[2];

  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(2);
  const positive = ((good / all) * 100).toFixed(2);

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + " %"} />
      </tbody>
    </table>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

  



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      
      <h1>Statistics</h1>
      <Statistics lista = {[good, neutral, bad]}/>

    </div>
  )
}

export default App