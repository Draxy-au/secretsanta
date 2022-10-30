import { useState } from "react";

import "./peopleForm.scss";

interface People {
  people: string[];
  setPeople: Function;
}

const PeopleForm = ({ people, setPeople }: People) => {
  const [newPerson, setNewPerson] = useState("");

  const handleNewPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewPerson(e.target.value);
  };

  const handleAddPerson = (e: React.MouseEvent) => {
    e.preventDefault();
    setPeople([...people, newPerson]);
    setNewPerson("");
  };

  return (
    <div className='peopleForm'>
      <input
        type='text'
        placeholder='Person to Add...'
        onChange={handleNewPerson}
        value={newPerson}
      />
      <button onClick={handleAddPerson}>ADD PERSON</button>

      <ul>
        {people?.map((person, key) => (
          <li key={key}>
            <button id='remove'>X</button>
            <span>{person}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleForm;
