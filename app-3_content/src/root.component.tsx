import React from "react";
import "./root.css";

export default function Root(props) {
  return <section className="content-wrapper" >
    <p className="title">
      Hello, I'm React!
    </p>

    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>
  </section>;
}
