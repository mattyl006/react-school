import React from 'react';
import Td from './styled-components/Td';

function Worker({employee}) {
    const [detail, setDetail] = React.useState(false);
    
    const showDetail = () => {
        setDetail(true);
    };
    
    return (
        <>
            <Td pointer onClick={showDetail}>
                {employee.name} {employee.surname}
            </Td>
            <Td>
                {
                    detail ? `wiek: ${employee.age}, pensja: ${employee.salary}, stanowisko: ${employee.position}`
                        : 'szczegóły'
                }
            </Td>
        </>
    );
}

export default Worker;