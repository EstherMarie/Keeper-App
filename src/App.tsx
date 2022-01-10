import React from 'react';
import { Header } from './components/Header'
import {Note} from './components/Note'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Note />
      </main>
      <Footer />
    </>
  );
}

export default App;
