import { ContextProvider } from './components/ContextProvider.jsx';
import Background from './components/Background.jsx';

function App() {
  return (
    <ContextProvider>
      <Background/>
    </ContextProvider>
  );
}

export default App;