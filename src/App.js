import React from 'react';
import './App.css';

// Components.
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
