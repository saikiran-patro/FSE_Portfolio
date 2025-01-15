import './App.css';
import appStore from './constants/appStore';
import DotBox from './components/DotBox'
import MainContainer from './components/MainContainer';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={appStore}>    
      
      <div className="App">
      <DotBox />
      <MainContainer />

    </div>
    </Provider>

  );
}

export default App;
