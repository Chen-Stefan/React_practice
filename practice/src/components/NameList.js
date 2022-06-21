import React from "react";
import Person
 from "./Person";
function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30
    },
    {
      id: 2,
      name: 'Clark',
      age: 25
    },
    {
      id: 3,
      name: 'Diana',
      age: 28
    }
  ]
  const personList = persons.map(person => <Person key={person.id} person = {person} />);
  return <div>{personList}</div>;
}

export default NameList;
