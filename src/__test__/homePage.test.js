import React, { Suspense } from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import 'intersection-observer';
import { Provider } from 'react-redux';
import store from '../store';

const Home = React.lazy(() => import('../pages/Home'));

test('is loaded home page', async () => {
  render(
    <Provider store={store}>
      <Suspense fallback={<>loading...</>}>
        <Home />
      </Suspense>
    </Provider>,
  );
  await waitFor(() => {
    const text = screen.getByText(/Table manufactures/i);
    expect(text).toBeInTheDocument();
  });
});
