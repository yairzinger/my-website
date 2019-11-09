import React from "react";
import './Sidebar.css';
import SidebarItem from "./SidebarItem/SidebarItem";

class Sidebar extends React.Component {
    render() {
        return(
            <aside className="Sidebar">
                <SidebarItem url="#">HOME</SidebarItem>
                <SidebarItem url="#">NEWS</SidebarItem>
                <SidebarItem url="#">PHOTOS</SidebarItem>
                <SidebarItem url="#">CONTACT</SidebarItem>
                <SidebarItem url="#">ABOUT</SidebarItem>
            </aside>
        );
    }
}

export default Sidebar;
