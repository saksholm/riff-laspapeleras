import React from 'react';
import './App.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import Wrapper from './Wrapper';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

const App = () => {
     return (
         <Provider store={store}>
           <Wrapper />
         </Provider>
    );

};

export default App;
