import React, { Component } from 'react';
import css from './user.module.css';
import Usuario from './Usuario';

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondsVisible: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    console.log('componentDidMount de Users.js');

    this.interval = setInterval(() => {
      const { secondsVisible } = this.state;
      this.setState({
        secondsVisible: secondsVisible + 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate de Users.js');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount de Users.js');
    clearInterval(this.interval);
  }

  render() {
    const { users } = this.props;
    const { secondsVisible } = this.state;
    console.log(users);
    return (
      <div className={css.divName}>
        <p className={css.dateUser}>
          Users visible for {secondsVisible} seconds
        </p>
        <ul>
          <Usuario user={users} />
        </ul>
      </div>
    );
  }
}
