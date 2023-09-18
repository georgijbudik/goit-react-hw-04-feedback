import { Container, Text } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <Container>
    <Text>{message}</Text>
  </Container>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
