import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const OnChangeUserMail = (e) => setUserMail(e.target.value);

  const validateUserName = (userName) => {
    if (userName.length > 5){
      return true;
    } else {
      return false;
    };
  };

  const validateUserMail = (userMail) => {
    const emailRegex = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    if(emailRegex.test(userMail)){
      return true;
    } else {
      return false;
    };

  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const isUsernameValid = validateUserName(userName);
    const isusermailValid = validateUserMail(userMail);

    if(!isUsernameValid || !isusermailValid){
      setMessage("Por favor verifique su información nuevamente");
    } else {
      setMessage("Gracias {userName} te contactaremos cuando antes vía mail");
      console.log(userName);
      console.log(userMail);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Nombre"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
          type="email"
          placeholder="Mail"
          value={userMail}
          onChange={OnChangeUserMail}
        />
        <button type="submit">Send</button>
      </form> 
      <p>{message}</p>          
    </div>
  );
};

export default Form;
