import React, { useState } from 'react';
const ListUser = (props) => {
    const [isShow, setIsShow] = useState(true);
    const handleClick = () => {
        setIsShow(!isShow);
    }
    return (
        <div>
            <span onClick={() => handleClick()}>{isShow ? "Hide" : "Show"} List user</span>
            {isShow && <div>
                {props.listUser.map((user) => {
                    if (+user.age < 18) {
                        return (
                            <div style={{ color: 'red' }}>
                                <p>Ten user: {user.name}</p>
                                <p>Tuoi user: {user.age}</p>
                                <button onClick={() => props.handleDelete(user.id)}>Delete</button>
                                <hr />
                            </div>
                        )
                    }
                    else {
                        return (
                            <div style={{ color: 'green' }}>
                                <p>Ten user: {user.name}</p>
                                <p>Tuoi user: {user.age}</p>
                                <button onClick={() => props.handleDelete(user.id)}>Delete</button>
                                <hr />
                            </div>
                        )
                    }

                })}
            </div>}
        </div>
    )
}

export default ListUser;