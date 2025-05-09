import { ContextProvider } from './components/ContextProvider.jsx';
import Background from './components/Background.jsx';
import Home from './components/sections/Home.jsx';

function App() {
  return (
    <ContextProvider>
      <Background/>
      <Home/>
    </ContextProvider>
  );
}

export default App;