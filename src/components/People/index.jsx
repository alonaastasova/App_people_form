import React from 'react';
import s from './style.module.css';

export default function People({id, first_name, last_name, photo, delete_person}) {
  return (
    <div className={s.card}>
        <p>{first_name} {last_name}</p>
        <img src={photo} alt="portrait" />
        <button  onClick={() => delete_person(id)}>Delete</button>
    </div>
  )
}
