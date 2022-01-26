import React from 'react';
import Table from './styled-components/Table';
import Tr from './styled-components/Tr';
import Td from './styled-components/Td';
import Worker from 'components/function/Employees/Worker';

function Employees(props) {
    return (
        <Table>
            <Tr>
                <Td bold>
                    X
                </Td>
                <Td bold>
                    Podstawowe informacje
                </Td>
                <Td bold>
                    Szczegółowe informacje
                </Td>
            </Tr>

            {
                props.data.map((elem) => {
                    return (
                        <Tr key={elem.id}>
                            <Td>
                                {elem.id}
                            </Td>
                            <Worker employee={elem} />
                        </Tr>
                    );
                })
            }
        </Table>
    );
}

export default Employees;