import './App.css';
import {AppProvider} from './appContext';
import Search from './components/search';
import VideosList from './components/videosList';

function App() {
  return (
    <AppProvider>
      <Search />
      <VideosList />
    </AppProvider>
  );
}

export default App;
