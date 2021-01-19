import React, { useState, useEffect } from 'react';
import Toggle from './components/toggle/Toggle';
import Users from './components/users/Users';
import css from './components/users/user.module.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(
        'https://randomuser.me/api/?seed=rush&nat=br&results=10'
      );
      const json = await res.json();
      setUsers(json.results);
    };
    fetchUsers();
  }, []);

  const handleShowUsers = (isChecked) => {
    setShowUsers(isChecked);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>User List App</h3>
      <Toggle
        description="Show users"
        enabled={showUsers}
        onToggle={handleShowUsers}
      />
      <hr />
      {showUsers && <Users users={users} />}
    </div>
  );
}
