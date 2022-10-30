import { useState } from "react";
import "./secretSanta.scss";

const SecretSanta = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [name, setName] = useState("");

  const handleJohn = () => {
    setShowButtons(false);
    setName("Jesse & Mel");
  };
  const handleJesse = () => {
    setShowButtons(false);
    setName("Peter-John & Tanya");
  };
  const handleDavid = () => {
    setShowButtons(false);
    setName("Aaron & Sam");
  };
  const handleAaron = () => {
    setShowButtons(false);
    setName("John & William");
  };
  const handlePeter = () => {
    setShowButtons(false);
    setName("David & Tammy");
  };

  return (
    <div className='secretsanta'>
      {showButtons && <h1>Secret Santa</h1>}

      {showButtons ? (
        <div className='options'>
          <button onClick={handleJohn}>John & William</button>
          <button onClick={handleJesse}>Jesse & Mel</button>
          <button onClick={handleDavid}>David & Tammy</button>
          <button onClick={handleAaron}>Aaron & Sam</button>
          <button onClick={handlePeter}>Peter-John & Tanya</button>
        </div>
      ) : (
        <h1>{name}</h1>
      )}
      {showButtons && (
        <p>Click on your Name to see who you were randomly assigned!</p>
      )}
    </div>
  );
};

export default SecretSanta;
