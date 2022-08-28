import SideBar from "./Sidebar"
import "./Admin.scss"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { FaBars } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar"> <SideBar collapsed={collapsed} ></SideBar></div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars style={{ "fontSize": "30px", "cursor": "pointer", "margin": "10px 0 0 10px" }} onClick={() => setCollapsed(!collapsed)} />
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
export default Admin