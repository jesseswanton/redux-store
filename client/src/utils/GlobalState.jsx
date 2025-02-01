//Redux
import { Provider } from 'react-redux';
//Redux
import store from './store';

const GlobalState = ({ children }) => {
  //redux provider
  return <Provider store={store}>
            {children}
        </Provider>;
};

export default GlobalState;
