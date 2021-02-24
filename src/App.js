import './App.css';
import React, { useState } from 'react';
import Toolbar from './Components/Toolbar/Toolbar';
import getProjects from './getProjects'
import ProjectsList from './Components/ProjectsList/ProjectsList';

function App() {
  const filtres = ["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelected] = useState('All');

  const onSelectFilter = (filter) => {
    setSelected(() => filter);
  } 
  
  return (
    <div className="app">
      <Toolbar
        filters={filtres}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectsList
        projects={getProjects()}
        selected={selected}
      />
    </div>
  );
}

export default App;
