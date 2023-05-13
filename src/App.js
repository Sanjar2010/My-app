import './App.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';
    

function App() {
  return (
    <div className="container">
    <Header/> 
      <MainContent/>
    <Footer/>
  </div>
  );
}

export default App;
