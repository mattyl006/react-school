import React from 'react';
import Nav from 'components/function/Menu/styled-components/Nav';

function Menu({children, menuDisplay}) {
    return (
        <Nav menuDisplay={menuDisplay}>
            {children}
        </Nav>
    );
}

export default Menu;