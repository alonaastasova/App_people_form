import React from 'react';
import s from './style.module.css';

export default function Form({add_person}) {
    const onSubmit = event => {
        event.preventDefault();
        const {first_name} = event.target;
        const {last_name} = event.target;
        const {photo} = event.target;

        const new_person = {
            id: Date.now(),
            first_name: first_name.value,
            last_name: last_name.value,
            photo: photo.value,
            show: true
        }
        add_person(new_person)

        first_name.value = '';
        last_name.value = '';
        photo.value = '';
    }

  return (
        <form className={s.form} onSubmit={onSubmit}>
            <input type="text" name="first_name" placeholder='Name...'/>
            <input type="text" name="last_name" placeholder='Surname...'/>
            <input type="img" name="photo" alt='photo' placeholder='Photo link...'/>
            <button>Submit</button>
        </form>
  )
}
