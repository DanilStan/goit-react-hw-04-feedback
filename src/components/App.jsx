import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = button => {
    switch (button) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default: {
        return;
      }
    }
  };
  const countTotalFeedback = () => {
    const values = [good, neutral, bad];
    return values.reduce((a, b) => (a += b), 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = good + neutral + bad;
    return Math.round((good / sum) * 100);
  };

  const buttonText = ['good', 'neutral', 'bad'];

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={buttonText} onLeaveFeedback={onLeaveFeedback} />
      {countTotal() > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={positivePercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Section>
  );
};
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     }
//   };

//   doStatValue = param => {
//     this.setState(prevState => {
//       return {
//         [param]: prevState[param] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const values = Object.values(this.state);
//     return values.reduce((a, b) => (a += b), 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const sum = this.state.good + this.state.neutral + this.state.bad;
//     return Math.round((this.state.good / sum) * 100);
//   };

//   render() {
//     const buttonText = Object.keys(this.state);
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <Feedback options={buttonText} onLeaveFeedback={this.doStatValue} />
//           <>{totalStatistics(this)}</>
//         </Section>
//       </>
//     );
//   }
// }

// function totalStatistics(parameters) {
//   const { good, neutral, bad } = parameters.state;

//   return (
//     <>
//       {parameters.countTotalFeedback() > 0 ? (
//         <Section title={'Statistics'}>
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={parameters.countTotalFeedback()}
//             positivePercentage={parameters.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       ) : (
//         <Notification message="There is no feedback"></Notification>
//       )}
//     </>
//   );
// }
