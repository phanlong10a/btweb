import AppTodo from './Routes/RootRouter';
import myConfigureStore from './store';
import { Provider } from 'react-redux';

const { store } = myConfigureStore(); 

const AppSagaToolkit = () => {
  return (
    <Provider store={store}>
      <AppTodo/>
    </Provider>
  )
}

export default AppSagaToolkit;