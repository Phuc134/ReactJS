
const TableUser = (props) => {

    const { listUsers, handleClickUpdate, handleClickView, handleClickDelete } = props;
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers.map((user, index) => {
                        return (
                            <tr key={`table-user-${index}`}>
                                <th scope="row">{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="btn btn-secondary" onClick={() => handleClickView(user)}> View</button>
                                    <button className="btn btn-warning mx-3" onClick={() => handleClickUpdate(user)} > Update</button>
                                    <button className="btn btn-danger" onClick={() => handleClickDelete(user)}> Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}

export default TableUser;