import React from 'react';
import './ProjectsList.css';

/*
  Как приянто с точки зрения организации кода объявлять для функциональных комопонетов
  вот такие вспомогательные функции?
  В этом же файле. Или делать отдельный файл с утилитами?
  Или вообще делать вложенноую функцию в функцию чтобы ёё не было видно в глобальной области
*/
function getAltFromUrl(url) {
  const path = url.split('/');
  return path.pop().split('.')[0];
}

export default function ProjectsList(props) {
  let projects = props.projects.map((item) => item);
  if (props.selected !== 'All') {
    projects = props.projects.filter((project) => project.category === props.selected)
  }
  return (
    <div className="project-list clearfix">
      {projects.map((item) => (
          <img
            className="project-list-item"
            src={item.img}
            alt={getAltFromUrl(item.img)}
            key={getAltFromUrl(item.img)}
          />
      ))}
    </div>
  );
}