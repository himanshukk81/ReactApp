import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="App">
       <Provider store={store}>
          <UserList />
       </Provider>
    </div>
  );
}

export default App;
