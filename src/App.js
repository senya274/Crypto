


import { Provider } from 'react-redux';
import './App.css';
import Main from './Components/Main/Main';
import { store } from './Redux/store';


function App() {
  return (
    <div className="App">

  <Provider store={store} >
      <Main />
      </Provider>
    </div>
  );
}

export default App;
