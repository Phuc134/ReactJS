import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteDeleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';

const ModalDeleteUser = ({ showDelete, setShowDelete, dataDelete, setDataDelete, fetchListUsers }) => {
    const handleSubmit = async () => {
        const data = await deleteDeleteUser(dataDelete.id);
        if (data && data.EC == 0) {
            toast.success(data.EM);
            setShowDelete(false);
            fetchListUsers();
        }
        if (data && data.EC != 0) {
            toast.error(data.EM)
        }
    }
    return (
        <>
            <Modal show={showDelete} onHide={() => setShowDelete(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>  Are you sure delete user {dataDelete.email}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDelete(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit(false)}>
                        &nbsp;&nbsp;Yes&nbsp;&nbsp;
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalDeleteUser