import './App.css';
import {AppProvider} from './appContext';
import Search from './components/search';
import VideosList from './components/videosList';
import ActiveVideo from './components/activeVideo';

function App() {
  return (
    <AppProvider>
      <Search />
      <ActiveVideo />
      <VideosList />
    </AppProvider>
  );
}

export default App;
