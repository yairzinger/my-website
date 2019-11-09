import React from 'react';
import MenuItem from "./MenuItem/MenuItem.js"

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(

            <nav className="Menu">
                <MenuItem url="http://www.google.com">Google</MenuItem>
                <MenuItem url="http://www.walla.co.il">Walla</MenuItem>
                <MenuItem url="http://www.yahoo.com">Yahoo</MenuItem>
            </nav>
        );
    }
}

export default Menu;
