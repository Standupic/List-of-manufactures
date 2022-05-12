import React, { Suspense } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import 'intersection-observer';
const Details = React.lazy(() => import('../pages/Details'));

test('is loaded details page', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<>loading</>}>
          <Details />
        </Suspense>
      </Provider>
    </BrowserRouter>,
  );
  await waitFor(() => {
    const text = screen.getByText(/Table with models/i);
    expect(text).toBeInTheDocument();
  });
});
