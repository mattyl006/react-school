import React from 'react';
import './Menu.scss';

function Menu({children}) {
    return(
        <nav className="Menu">
            {children}
        </nav>
    );
}

export default Menu;
