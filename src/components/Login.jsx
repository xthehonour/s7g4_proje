import { useState } from "react";
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup, Label, FormFeedback} from "reactstrap";
export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  function handleEmailChange(event){
    const {value} = event.target;
    setEmail(...email, value);
  }
  function handlePasswordChange(event){
    const {value} = event.target;
    setpassword(...password, value);
  }


  return (
    <div className="form-div"> 
      <form>
        <div className="email-div">
          <label  htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" onChange={handleEmailChange}></input>
        </div>
        
        <div>
          <label htmlFor="password">Password: </label>
        <input type="password" className="password" id="password" name="password" onChange={handlePasswordChange}></input>
        </div>
        
        <button>Login</button>

      
      </form>
    </div>
  )
}