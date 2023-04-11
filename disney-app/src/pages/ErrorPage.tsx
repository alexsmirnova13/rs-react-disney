import React from 'react';
import { ErrorPageStyled } from './ErrorPageStyle';

const ErrorPage = () => {
  return (
    <ErrorPageStyled data-testid="error-page" className="error-contain">
      <div className="error-text">
        <h1>404</h1>
        <p>Страница не найдена.</p>
        <p>Мы искали высоко и низко.</p>
      </div>
      <div className="binoculars">
        <div className="back-bino"></div>
        <div className="left-bino"></div>
        <div className="right-bino"></div>
        <div className="left-bino-lense">
          <div className="eye"></div>
        </div>
        <div className="right-bino-lense">
          <div className="eye"></div>
        </div>
      </div>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
