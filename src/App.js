import React from 'react';
import './App.css';

// Components.
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
