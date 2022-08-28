import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlinePlusCircle } from 'react-icons/ai'


const ModalViewUser = (props) => {
    const [previewImage, setPreviewImage] = useState("");
    const { dataView, showView, setShowView, setDataView } = props;
    useEffect(() => {
        if (dataView.image) {
            setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
        }
    }, [dataView])

    return (
        <>
            <Modal show={showView} onHide={() => {
                setDataView({});
                setPreviewImage("");
                setShowView(false);
            }} size="xl" backdrop='static' className="modal-add-user">
                <Modal.Header closeButton>
                    <Modal.Title>View Detail User</Modal.Title>
                </Modal.Header>
                <Modal.Body><form className="row g-3" >
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input disabled type="email" value={dataView.email} className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input disabled type="password" value="" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Username</label>
                        <input type="text" value={dataView.username} className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">ROLE</label>
                        <select className="form-select" value={dataView.role}  >
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>
                    <div className='col-md-12'>
                        <label disabled className="form-label label-upload" htmlFor='labelUpload'> <AiOutlinePlusCircle />Upoad File Image</label>
                        <input type="file" id="labelUpload" hidden />
                    </div>
                    <div className='col-md-12 img-preview'>
                        {previewImage ? <img src={previewImage}></img> : <span>Preview Image</span>

                        }
                    </div>

                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        setShowView(false);
                        setPreviewImage("");
                        setDataView({});
                    }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
export default ModalViewUser;




