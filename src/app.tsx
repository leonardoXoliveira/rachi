import { Contact } from './components/contact';
import { Download } from './components/download';
import { Features } from './components/features';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Plans } from './components/plans';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Download />
      <Plans />
      <Contact />
    </>
  );
}

export default App;
