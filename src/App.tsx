import { BrowserRouter } from 'react-router-dom';
import Navigator from './routes';
import './assets/i18n/config';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
    </div>
  );
}

export default App;
