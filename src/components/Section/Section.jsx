import PropTypes from 'prop-types';
import { SectionBox, TitleBox } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <TitleBox>{title}</TitleBox>
      {children}
    </SectionBox>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
