import React from 'react';
import A from './styled-components/A';

function MenuLink({children, to, isActive}) {
    return (
        <A href={to} isActive={isActive}>
            {children}
        </A>
    );
}

export default MenuLink;