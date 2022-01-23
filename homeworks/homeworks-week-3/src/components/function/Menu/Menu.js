import React from 'react';
import Nav from 'components/function/Menu/styled-components/Nav';

function Menu({children}) {
    return (
        <Nav>
            {children}
        </Nav>
    );
}

export default Menu;