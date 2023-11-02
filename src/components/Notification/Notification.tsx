import { FC } from 'react';
import { Container, Text } from './Notification.styled';

interface NotificationProps {
  message: string;
}

const Notification: FC<NotificationProps> = ({ message }) => (
  <Container>
    <Text>{message}</Text>
  </Container>
);

export default Notification;
