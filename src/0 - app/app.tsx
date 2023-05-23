import { FC } from 'react';
import { AppStyles } from '@app/app.styles';
import { Router } from '@app/router';
import { Provider } from 'react-redux';
import { setupStore } from '@app/store';

const store = setupStore();

const App: FC = () => {
  return (
    <>
      <AppStyles />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
