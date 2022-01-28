import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { UserList } from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';


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
