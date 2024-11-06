import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const goodWeight = 1;
  const neutralWeight = 0;
  const badWeight = -1;
  const all = good + neutral + bad;
  const average =
    all === 0
      ? 0
      : (good * goodWeight + neutral * neutralWeight + bad * badWeight) / all;
  const positive = all === 0 ? 0 : (100 * good) / all;

  return (
    <div>
      {all > 0 ? (
        <>
          <h2>statistics</h2>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + "%"} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
