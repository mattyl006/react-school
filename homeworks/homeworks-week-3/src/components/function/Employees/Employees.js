import React from 'react';
import Table from './styled-components/Table';
import Tr from './styled-components/Tr';
import Td from './styled-components/Td';

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
                            <Td>
                                {elem.name} {elem.surname}
                            </Td>
                            <Td>
                                wiek: {elem.age}, pensja: {elem.salary}, stanowisko: {elem.position}
                            </Td>
                        </Tr>
                    );
                })
            }
        </Table>
    );
}

export default Employees;