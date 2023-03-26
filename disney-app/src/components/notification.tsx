import React from 'react';
import styled from '@emotion/styled';

const StyledMessage = styled.div``;
interface IMessageProps {
  message: string;
}
class Message extends React.Component<IMessageProps> {
  render() {
    return <StyledMessage data-testid="message">{this.props.message}</StyledMessage>;
  }
}

export default Message;
