import React, { useState } from 'react';
const UserInfo = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const handleOnChange = event => {
        setName(event.target.value)
    }
    const handleOnChangeAge = event => {
        setAge(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let newUser = {
            id: Math.floor(Math.random() * 1000),
            name: name,
            age: age
        }
        props.handleSubmit(newUser);
    }

    return (
        <div>
            My name is {name} and I'm {age} years old.
            < br ></br >
            <form onSubmit={(event) => handleSubmit(event)}>
                <input value={name} onChange={(event) => handleOnChange(event)} />
                <input value={age} onChange={(event) => handleOnChangeAge(event)} />
                <button >Add user</button>
            </form>
        </div>
    )

}

export default UserInfo;
