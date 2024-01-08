import React, { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [displayToken, setDisplayToken]= useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    setSuccessMessage(null);
    setDisplayToken(null);
    setError(null);

    if (!token) {
      setError("No token provided. Please log in first.");
      return
    }
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      if (response.ok) {
        setSuccessMessage(result.message);
        setDisplayToken(token);
      } else {
        setError(result.error || "Failed to authenticate token.");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && (<><p>{successMessage}</p>
      <p>Token: {displayToken}</p></>)}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
