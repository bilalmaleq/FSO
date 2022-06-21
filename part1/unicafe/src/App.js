import { useState } from "react";

function Title() {
  return <h1>give feedback</h1>;
}

function StatisticsLine(prop) {
  
    if(prop.all == 0 && prop.text == "all") {
      return (
        <tr>
        <td>no feedback given</td>
      </tr>
      )
    } else if (prop.all == 0 && prop.text != "all")
    {
      
    } else {
      
        return (
          <>
            <tr>
              <td>{prop.text}</td>
              <td>{prop.value}</td>
            </tr>
          </>
        )
      
    }
  
}

function Button (prop) {
  return(
    <button>{prop.text}</button>
  )
}


function App() {
  const [ratings, setRatings] = useState({ good: 0, neutral: 0, bad: 0 });
  const all = ratings.good + ratings.neutral + ratings.bad;
  const average = all / 3;
  const postiveAverage = (ratings.good * 100) / all;
  function goodClicked() {
    const newClicks = {
      ...ratings,
      good: ratings.good + 1,
    };
    setRatings(newClicks);
    console.log(ratings.good);
  }

  function neutralClicked() {
    const newClicks = {
      ...ratings,
      neutral: ratings.neutral + 1,
    };
    setRatings(newClicks);
    console.log(ratings.neutral);
  }
  function badClicked() {
    const newClicks = {
      ...ratings,
      bad: ratings.bad + 1,
    };
    setRatings(newClicks);
    console.log(ratings.bad);
  }

  console.log(all);
  return (
    <div className="App">
      <Title />
      <Button onClick={() => goodClicked()} text="good" />
      <button onClick={goodClicked}>good</button>
      <button onClick={neutralClicked}>neutral</button>
      <button onClick={badClicked}>bad</button>
      <table>
        <thead>
          <tr>
            <th>statistics</th>
          </tr>
        </thead>
        <tbody>
          <StatisticsLine text="good" value={ratings.good} all={all}/>
          <StatisticsLine text="neutral" value={ratings.neutral} all={all}/>
          <StatisticsLine text="bad" value={ratings.bad} all={all}/>
          <StatisticsLine text="all" value={all} all={all}/>
          <StatisticsLine text="average" value={average} all={all}/>
          <StatisticsLine text="positive" value={postiveAverage} all={all}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
