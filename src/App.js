import './App.css';
import Programs from './Programs/Programs';
import Reasons from './Reasons/Reasons';
import Testimonials from './assets/Testimonials/Testimonials';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;