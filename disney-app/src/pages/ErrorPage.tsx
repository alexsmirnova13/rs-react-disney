import styled from '@emotion/styled';
import React from 'react';

const Divch = styled.div`
  height: 300px;
  width: 300px;
`;
class ErrorPage extends React.Component {
  render() {
    return (
      <Divch data-testid="error-page">
        Это такая некрасивая пока что страница 404, но потом сделаю красивее
      </Divch>
    );
  }
}

export default ErrorPage;
