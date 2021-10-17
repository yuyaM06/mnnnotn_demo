import React from "react";
import { Link } from "react-router-dom";

export default function PageA() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/Top">Top</Link>
      <br />
      <br />
      <Link to="/MainPage">MainPage</Link>
    </div>
  );
}
