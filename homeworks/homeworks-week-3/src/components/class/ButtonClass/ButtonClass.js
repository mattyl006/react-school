import React from 'react';
import Button from './styled-components/Button';

class ButtonClass extends React.Component {

    static defaultProps = {
        color: 'asbestos',
        bgColor: 'silver'
    }

    render() {
        return (
            <Button color={this.props.color} bgColor={this.props.bgColor}>
                {this.props.children}
            </Button>
        );
    }
}

export default ButtonClass;