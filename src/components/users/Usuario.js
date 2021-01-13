import React, { Component } from 'react';
import css from './user.module.css';

export default class Usuario extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className={css.listUsers}>
        {user.map((user) => {
          return (
            <div className={css.divUser}>
              <img className={css.photo} src={user.picture.large} />
              <ul className={css.dateUser}>
                <li key={user.login.uuid}>
                  Name: {user.name.first} {user.name.last}
                </li>
                <li>Age: {user.dob.age}</li>
                <li>Cidade: {user.location.city}</li>
                <li>Gender: {user.gender}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
