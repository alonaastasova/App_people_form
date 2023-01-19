import React from 'react';
import s from './style.module.css';

export default function Filter({search}) {

  const search_task = event => {
    search(event.target.value)
  }

  return (
    <div className={s.search}>
        <input type="text" placeholder='Search...' name='title' onChange={search_task}/>
    </div>
  )
}
