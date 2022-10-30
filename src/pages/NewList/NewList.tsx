import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PeopleForm from "../../components/People/PeopleForm";

import "./newList.scss";

const NewList = () => {
  const [listName, setListName] = useState("");
  const [people, setPeople] = useState([]);
  const [addPeople, setAddPeople] = useState(false);

  const navigate = useNavigate();

  const handleListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setListName(e.target.value);
  };

  const handleCreateList = (event: React.MouseEvent) => {
    event.preventDefault();
    //Just add to Database
    //Open People Form
    setAddPeople(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/list/${listName}`);
  };

  const handleBack = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <div className='newList'>
      <div className='header'>
        <button onClick={handleBack}>CANCEL</button>

        <span>{addPeople ? listName : ""}</span>
      </div>

      <form onSubmit={handleSubmit}>
        {!addPeople && (
          <input
            name='name'
            type='text'
            placeholder='List Name...'
            value={listName}
            onChange={handleListName}
          />
        )}
        {!addPeople && <button onClick={handleCreateList}>CREATE LIST</button>}
        {addPeople && <PeopleForm people={people} setPeople={setPeople} />}
        {addPeople && (
          <button className='submit' type='submit'>
            SAVE LIST
          </button>
        )}
      </form>
    </div>
  );
};

export default NewList;
