import ContactContextProvider from './contexts/ContactContext';
import Routes from './Routes'

function App() {
  return (
    <ContactContextProvider>
      <Routes />
    </ContactContextProvider>
  );
}

export default App;
