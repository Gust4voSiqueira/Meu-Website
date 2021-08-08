import './styles/global.css'
import { Landing } from './Sections/Landing/Landing';
import { Header } from './components/Header/Header';
import { SobreMim } from './Sections/SobreMim/SobreMim';
import { Projects } from './Sections/Projects/Projects';
import { Conhecimentos } from './Sections/Conhecimentos/Conhecimentos';
import { Contact } from './Sections/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Landing />
      <SobreMim />
      <Projects />

      <Conhecimentos />
      <Contact />
    </>
  );
}

export default App;
