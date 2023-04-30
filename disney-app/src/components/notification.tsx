import styled from '@emotion/styled';

const StyledMessage = styled.div`
  position: absolute;
  color: green;
  display: block;
  border-radius: 8px;
  border: 1px solid green;
  top: 150px;
  left: 30px;
  padding: 6px 20px 4px 10px;
`;
interface IMessageProps {
  message: string;
}

const Message = (props: IMessageProps) => {
  return <StyledMessage data-testid="message">{props.message}</StyledMessage>;
};

export default Message;
