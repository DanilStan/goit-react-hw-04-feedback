import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FeedbackButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  padding: 5px 5px;
  border-radius: 3px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;
