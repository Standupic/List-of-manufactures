import { ChakraProvider, Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PAGE_TITTLE } from './pages/types';
const Home = React.lazy(() => import('./pages/Home'));
const Details = React.lazy(() => import('./pages/Details'));

const App = () => {
  return (
    <ChakraProvider>
      <Switch>
        <Route path={PAGE_TITTLE.home} exact>
          <Suspense fallback={<Spinner />}>{<Home />}</Suspense>
        </Route>
        <Route path={PAGE_TITTLE.details}>
          <Suspense fallback={<Spinner />}>{<Details />}</Suspense>
        </Route>
      </Switch>
    </ChakraProvider>
  );
};

export default App;
