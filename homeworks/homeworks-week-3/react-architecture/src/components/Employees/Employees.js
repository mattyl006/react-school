import React from 'react';

import './Employees.scss';

function Employees({data}) {
    return(
        <table className="Employees">
            <caption>Employees data</caption>
            <thead>
                <tr>
                    <th>Name and surname</th>
                    <th>Detail information</th>
                </tr>
            </thead>
            <tbody>
            {data.map((elem) => (
                <tr key={`employee:${elem.id}`}>
                    <td >{elem.name}</td>
                    <td >{elem.detail}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Employees;
