import React from 'react';
import './App.css';

import Cursor from './Cursor';
import Header from './components/Header';
import About from './components/About';
import Members from './components/Members';
// import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Cursor />
      <Header />
      <main>
        <About />
        <Members />
        {/* <Media /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
