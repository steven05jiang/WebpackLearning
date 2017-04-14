import React, {Component} from 'react'
import greet from './greet.json';
import styles from './Greeter.css';

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {greet.greetText}
      </div>
    );
  }
}

export default Greeter