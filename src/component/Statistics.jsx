const Statistics = ({ good, neutral, bad }) => {
  const goodWeight = 1;
  const neutralWeight = 0;
  const badWeight = -1;
  const all = good + neutral + bad;
  const average =
    all === 0 ? 0 : (good * goodWeight + neutral * neutralWeight + bad * badWeight) / all;
  const positive = all === 0 ? 0 : (100 * good) / all;
  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

export default Statistics;
