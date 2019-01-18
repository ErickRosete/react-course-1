import React from "react";
import styles from "./Cockpit.module.css";

const Cockpit = props => {
  let btnClass = "";
  const classes = [];

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }

  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  if (props.showPersons) {
    btnClass = styles.Red;
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I am a react App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        show or hide names!
      </button>
    </div>
  );
};

export default Cockpit;
