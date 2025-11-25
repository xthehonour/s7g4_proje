import { use, useState } from "react";
export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="email">Email: </label>
        <input id="email" name="email"></input>
      </form>
    </div>
  )
}