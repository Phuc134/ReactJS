import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState, useEffect } from "react"
import TableUser from "./TableUser"
import { getListUsers } from "../../../services/apiService"
import ModalUpdateUser from "./ModalUpdateUser"
import ModalViewUser from "./ModalViewUser"
import ModalDeleteUser from "./ModalDeleteUser"

const ManageUser = (props) => {
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showView, setShowView] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [dataUpdate, setDataUpdate] = useState({});
    useEffect(() => {
        fetchListUsers();
    }, [])
    const fetchListUsers = async () => {
        let res = await getListUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }
    const handleClickUpdate = (user) => {
        setShowUpdate(true);
        setDataUpdate(user);
    }

    const handleClickView = (user) => {
        setShowView(true);
        setDataView(user);
    }

    const handleClickDelete = (user) => {
        setShowDelete(true);
        setDataDelete(user);
    }
    const [listUsers, setListUsers] = useState([])
    return (

        <div className="manage-user-container">
            <div className="title">ManageUser</div>
            <div className="users-content">
                <div><button className="btn btn-primary" style={{
                    "display": "flex",
                    "margin": "15px 0",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "gap": "5px"
                }} onClick={() => setShow(true)}><AiOutlinePlusCircle /><span>Add new user</span></button></div>
                <div><TableUser handleClickDelete={handleClickDelete} handleClickView={handleClickView} handleClickUpdate={handleClickUpdate} listUsers={listUsers} /></div>
                <ModalCreateUser show={show} setShow={setShow} fetchListUsers={fetchListUsers} />
                <ModalUpdateUser setDataUpdate={setDataUpdate} dataUpdate={dataUpdate} fetchListUsers={fetchListUsers} showUpdate={showUpdate} setShowUpdate={setShowUpdate} />
                <ModalViewUser setDataView={setDataView} dataView={dataView} showView={showView} setShowView={setShowView} />
                <ModalDeleteUser setDataDelete={setDataDelete} dataDelete={dataDelete} showDelete={showDelete} setShowDelete={setShowDelete} fetchListUsers={fetchListUsers} />

            </div>
        </div >
    )
}
export default ManageUser