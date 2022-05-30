import './App.css';
// import axios from 'axios';
import { Header } from './Components/Partials/Header/Header';
import { Footer } from './Components/Partials/Footer/Footer';
import { AppRouter } from './Components/appRouter/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;