import './App.css';
import {AppProvider} from './appContext';
import Search from './components/search';

function App() {
  return (
    <AppProvider>
      <Search />
    </AppProvider>
  );
}

export default App;
