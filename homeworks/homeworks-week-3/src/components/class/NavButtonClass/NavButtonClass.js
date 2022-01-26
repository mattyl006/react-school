import React from 'react';
import Button from './styled-components/Button';

class NavButtonClass extends React.Component {
    render() {
        return (
            <Button onClick={this.props.toggleMenu} />
        );
    }
}

export default NavButtonClass;