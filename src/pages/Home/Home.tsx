import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <h1>Secret Santa</h1>
      <div className='options'>
        <Link to='/newlist'>
          <button id='newList'>Create a New List</button>
        </Link>
        <Link to='/list'>
          <button id='oldList'>Open Existing List</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
