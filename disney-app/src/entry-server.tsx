import { Response } from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import { setupStore } from './redux/store';

export function renderToPipe(url: string, template: string, res: Response): void {
  const html = template.split('<!--app-html-->');
  res.write(html[0]);
  const store = setupStore();

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    {
      onShellReady() {
        stream.pipe(res);
      },
      onAllReady() {
        res.write(html[1]);
        res.end();
      },
    }
  );
}
