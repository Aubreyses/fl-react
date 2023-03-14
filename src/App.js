import AboutUs from './components/aboutUs/AboutUs';
import Equipment from './components/equipment/Equipment';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Location from './components/location/Location';
import Registration from './components/registration/Registration';
import Stages from './components/stages/Stages';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Stages/>
      <Equipment/>
      <Location/>
      <Registration/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
