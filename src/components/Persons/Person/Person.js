import React from "react";
import styles from "./Person.module.css";

const person = props => {
  return (
    <div className={styles.Person}>
      <h2 onClick={props.click}>
        My name is {props.name} and my age is {props.age}
      </h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
