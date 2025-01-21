import './App.scss';
import { About, Work, Skills, Header, Testimonial, Footer} from './container';
import { Navbar } from './components';

function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </>
  )
}

export default App
