import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaGithub, FaRegLaughWink, FaReact } from 'react-icons/fa';
import sidebarBg from '../../assets/bg2.jpg';
import './Sidebar.scss';
const SideBar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    return (
        <ProSidebar
            image={sidebarBg}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <FaReact style={{
                        fontSize: "40px", width: "35px", marginRight: "10px", color: "#61DAFB"
                    }} />
                    Hoi Dan IT
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                    >Dashboard
                        <Link to="/admin"></Link>

                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        title="Features"
                        icon={<FaRegLaughWink />}>
                        <MenuItem>Quản lý User
                            <Link to="/admin/manage-users"></Link>
                        </MenuItem>
                        <MenuItem>Quản lý bài Quiz</MenuItem>
                        <MenuItem>Quản lý câu hỏi</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            ViewSource
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}
export default SideBar