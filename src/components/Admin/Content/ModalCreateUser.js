import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { toast } from 'react-toastify';
import { postCreatNewUser } from '../../../services/apiService';
const ModalCreateUser = (props) => {
    console.log(props);
    const { show, setShow, fetchListUsers } = props;
    const handleClose = () => {
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
        setShow(false)
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const handleUploadImage = (event) => {
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmit = async (props) => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email');
            return;
        }
        if (!password) {
            toast.error("invalid password");
            return;
        }

        const data = await postCreatNewUser(email, password, username, role, image);
        if (data && data.EC == 0) {
            toast.success(data.EM);
            handleClose();
            fetchListUsers();
        }
        if (data && data.EC != 0) {
            toast.error(data.EM)
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" backdrop='static' className="modal-add-user">
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3" >
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">ROLE</label>
                        <select className="form-select" onChange={(event) => setRole(event.target.value)} >
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>
                    <div className='col-md-12'>
                        <label className="form-label label-upload" htmlFor='labelUpload'> <AiOutlinePlusCircle />Upoad File Image</label>
                        <input type="file" id="labelUpload" hidden onChange={(event) => handleUploadImage(event)} />
                    </div>
                    <div className='col-md-12 img-preview'>
                        {previewImage ? <img src={previewImage}></img> : <span>Preview Image</span>

                        }
                    </div>

                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser