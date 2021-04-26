import React from 'react';
import './Menu.scss';

const activeStyles = (isActive) => {

    const styles = {
        active: {
            color: "red",
            fontWeight: "bold",
        },
        notActive: {
          fontWeight: "normal"
        }
    };

    if(isActive) {
        return styles.active;
    }
    return styles.notActive;
};

function MenuLink({to, children, isActive=false}) {
    return (
        <a className="MenuLink" style={activeStyles(isActive)} href={to}>{children}</a>
    );
}

export default MenuLink;
