import React, { useState } from 'react';
import ListUser from './ListUser';
import UserInfo from './UserInfo';
const MyComponent = () => {
    const [listUser, setListUser] = useState([]);
    const handleSubmit = (obj) => {
        setListUser([obj, ...listUser]);
    }
    const handleDelete = (id) => {
        setListUser(listUser.filter((user) => {
            return user.id != id;
        }))
    }
    return (
        <div>
            <UserInfo handleSubmit={handleSubmit} />
            <ListUser listUser={listUser} handleDelete={handleDelete} />
        </div>)
}

export default MyComponent;