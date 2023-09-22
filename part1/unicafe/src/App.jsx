import { useState } from 'react'

const Button = ({ label, handleClick }) => {
    return <button onClick={handleClick}>{label}</button>;
};


const StatisticLine = ({ text, value }) => {
    return (
        <p>
            {text}: {value}
        </p>
    );
};



const Statistics = ({ good, neutral, bad }) => {
    const totalFeedback = good + neutral + bad;
    const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
    const positivePercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

    return (
        <div>
            <h2>Statistics</h2>
            {totalFeedback === 0 ? (
                <p>No feedback given</p>
            ) : (
                <table>
                    <tbody>
                    <tr>
                        <td>Good</td>
                        <td style={{ textAlign: "left" }}>{good}</td>
                    </tr>
                    <tr>
                        <td>Neutral</td>
                        <td style={{ textAlign: "left" }}>{neutral}</td>
                    </tr>
                    <tr>
                        <td>Bad</td>
                        <td style={{ textAlign: "left" }}>{bad}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td style={{ textAlign: "left" }}>{totalFeedback}</td>
                    </tr>
                    <tr>
                        <td>Average</td>
                        <td style={{ textAlign: "left" }}>{averageScore.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Positive</td>
                        <td style={{ textAlign: "left" }}>{positivePercentage.toFixed(2)}%</td>
                    </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};


const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClick = () => setGood(good + 1);
    const handleNeutralClick = () => setNeutral(neutral + 1);
    const handleBadClick = () => setBad(bad + 1);

    return (
        <div>
            <h1>Give feedback</h1>
            <Button label="good" handleClick={handleGoodClick} />
            <Button label="neutral" handleClick={handleNeutralClick} />
            <Button label="bad" handleClick={handleBadClick} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
