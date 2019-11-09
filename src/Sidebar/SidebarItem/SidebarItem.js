import React from 'react';
import './SidebarItem.css';

class SidebarItem extends React.Component {
    render () {
        return (
            <a className="SidebarItem" href={this.props.children}>{this.props.children}</a>
        );
    }
}
export default SidebarItem;
