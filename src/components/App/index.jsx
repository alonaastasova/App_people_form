import React from "react";
import { useState } from "react";
import Filter from "../Filter";
import Form from "../Form";
import People from "../People";
import s from "./style.module.css";

function App() {

  const persons = [
    {
      id: 1,
      first_name: 'Jessica',
      last_name: 'Willow',
      photo: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_960_720.jpg',
      show: true
    },
    {
      id: 2,
      first_name: 'John',
      last_name: 'Gray',
      photo: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg',
      show: true
    },
    {
      id: 3,
      first_name: 'Frank',
      last_name: 'Spouse',
      photo: 'https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg',
      show: true
    }
  ];

  const [person, setPersons] = useState(persons);

  const add_person = (human) => {
    setPersons([...person, human])
  }

  const delete_person = (id) => {
    const new_persons = person.filter(human => human.id !== id);
    setPersons(new_persons);
  }

  const search = (string) => {
    string = string.toLowerCase();
    const person_new = person.map(human => {
      human.show = human.first_name.toLowerCase().startsWith(string) || human.last_name.toLowerCase().startsWith(string);
      return human
    })
    setPersons(person_new)
  }

  return (
    <div className={s.body}>
      <Form add_person = {add_person}/>
      <Filter search={search}/>
      <div className={s.container}>
        {
          person.length === 0 
          ? <p>No people</p>
          :
          person
          .filter(({show}) => show)
          .map(person =>
            <People 
            key={person.id}
            {...person}
            delete_person = {delete_person}
            />)
        }
      </div>
    </div>
  );
}

export default App;
