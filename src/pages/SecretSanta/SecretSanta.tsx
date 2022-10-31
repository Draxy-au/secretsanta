import { useState, useEffect } from "react";
import { randomAssign } from "../../util/utils";
import "./secretSanta.scss";

const SecretSanta = () => {
  // TESTING

  // const assignees: string[] = [
  //   "Will & John",
  //   "Jesse & Mel",
  //   "David & Tammy",
  //   "Aaron & Sam",
  //   "Peter-John & Tanya",
  // ];

  // console.log(randomAssign(assignees));

  // return <div></div>;

  // ACTUAL CODE BELOW

  const [showButtons, setShowButtons] = useState(true);
  const [name, setName] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [pwCheck, setPwCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (pwCheck) {
      setShowButtons(false);
    }
  }, [pwCheck]);

  const handleJohn = () => {
    setCurrentPassword("monkey");
    setShowPassword(true);
    setName("Aaron & Sam");
  };
  const handleJesse = () => {
    setCurrentPassword("tiger");
    setShowPassword(true);
    setName("David & Tammy");
  };
  const handleDavid = () => {
    setCurrentPassword("lion");
    setShowPassword(true);
    setName("Peter-John & Tanya");
  };
  const handleAaron = () => {
    setCurrentPassword("python");
    setShowPassword(true);
    setName("Jesse & Mel");
  };
  const handlePeter = () => {
    setCurrentPassword("bear");
    setShowPassword(true);
    setName("John & William");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleOK = (e: React.MouseEvent) => {
    e.preventDefault();
    if (passwordInput === currentPassword) {
      setPwCheck(true);
    }
    setPasswordInput("");
    setShowPassword(false);
  };

  return (
    <div className='secretsanta'>
      {showButtons && <h1>Secret Santa</h1>}

      {showPassword && (
        <div className='password-area'>
          <input
            type='password'
            id='password'
            value={passwordInput}
            onChange={handlePasswordChange}
          />
          <button onClick={handleOK}>OK</button>
        </div>
      )}

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
