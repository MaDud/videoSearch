import './App.css';
import {AppProvider} from './appContext';
import Search from './components/search';
import VideosList from './components/videosList';
import ActiveVideo from './components/activeVideo';

function App() {
  return (
    <AppProvider>
      <header className='app__header'>
        <h1 className='app__title'>VideoApp</h1>
        <Search />
      </header>
      <ActiveVideo />
      <VideosList />
    </AppProvider>
  );
}

export default App;
