import PropTypes from 'prop-types';
import { StatisticsList, StatisticsText } from './Statistics.styled';

const Statistics = props => {
  const values = Object.keys(props);
  return (
    <StatisticsList>
      {values.map(stat => (
        <li key={stat}>
          <StatisticsText>
            {stat === 'positiveFeedback'
              ? 'positive feedback  : '
              : `${stat.toLowerCase()}: `}
            <span>{props[stat]}</span>
          </StatisticsText>
        </li>
      ))}
    </StatisticsList>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  }),
};

export default Statistics;
