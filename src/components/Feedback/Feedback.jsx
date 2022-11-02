import PropTypes from 'prop-types';
import { FeedbackList, FeedbackButton } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(text => (
        <li key={text}>
          <FeedbackButton type="button" onClick={() => onLeaveFeedback(text)}>
            {text}
          </FeedbackButton>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
