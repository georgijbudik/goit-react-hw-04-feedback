import { FC } from 'react';
import { Container, Button } from './FeedbackOptions.styled';

interface FeedbackOptionsProps {
  options: string[];
  onLeaveFeedback: (option: string) => void;
}

const FeedbackOptions: FC<FeedbackOptionsProps> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <Container>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Container>
  );
};

export default FeedbackOptions;
