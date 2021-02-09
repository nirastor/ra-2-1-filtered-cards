import './App.css';
import React, { useState } from 'react';
import Toolbar from './Components/Toolbar/Toolbar';
import getProjects from './getProjects'
import ProjectsList from './Components/ProjectsList/ProjectsList';

function App() {
  const filtres = ["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelected] = useState('All');

  const onSelectFilter = (e) => {
    /*
      Правильно ли пользоваться dataset-id,
      который дублирует текст элемента для передачи значения,
      чтобы не считывать текст из innerText?
      Или нормально использовать innerText и не дублировать в разметке,
      поскольку все равно все строим на основе текста
      Считаем, что этот текст уникальный.
    */
    const newSelected = e.currentTarget.dataset.filterId
    /*
      Вот тут я не до конца понимаю почему через промежуточную переменную работает,
      а если передать e.currentTarget.dataset.filterId сразу в setSelected,
      то не работает.
      Почему теряется контекст?
    */
    setSelected(() => newSelected);
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
