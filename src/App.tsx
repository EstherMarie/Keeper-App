import React from 'react';
import { Header } from './components/Header'
import { Note } from './components/Note'
import { Footer } from './components/Footer'
import { notes } from './notes'

function App() {
  return (
    <>
      <Header />
      <main>
        {notes.map((note, index)=>(
          <Note key={index} title={note.title} content={note.content}/>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
