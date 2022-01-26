import React from 'react';
import Button from './styled-components/Button';

function NavButton({toggleMenu}) {
    return (
        <Button onClick={toggleMenu} />
    );
}

export default NavButton;