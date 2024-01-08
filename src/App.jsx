import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import React, { useState } from 'react';

export default function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  return (
    <>
    <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  );
}