import React from 'react';
import './Toolbar.css'

export default function Toolbar(props) {
  return (
    <ul className="toolbar">
      {props.filters.map((o) => {
        const className = o === props.selected ? 'toolbar-item selected' : 'toolbar-item';
        return (<li key={o} data-filter-id={o} className={className} onClick={props.onSelectFilter}>{o}</li>);
      })}
    </ul>
  );
}
