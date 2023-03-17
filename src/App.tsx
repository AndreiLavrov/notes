import React from 'react';

import ActiveNote from 'src/components/ActiveNote';
import NotesList from 'src/components/NotesList';
import Tools from 'src/components/Tools';
import 'src/App.css';

function App() {
  return (
    <div className="app">
      <Tools />
      <div className="notesWrapper">
        <NotesList />
        <ActiveNote />
      </div>
    </div>
  );
}

export default App;
