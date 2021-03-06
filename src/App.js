import React, { useState } from 'react';
import './App.css';

// Components.
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState('About');

  return (
    <div className="App container mx-auto  max-w-5xl flex flex-col min-h-screen">
      <Header
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
      />
      <Main selectedNavItem={selectedNavItem} />
      <Footer />
    </div>
  );
}

export default App;
