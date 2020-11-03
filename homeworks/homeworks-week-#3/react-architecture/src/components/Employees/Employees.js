import React from 'react';

import './Employees.scss';

let hideDetail = true;

const displayDetail = () => {
    if(hideDetail) {
        return {display: "none"};
    }
    return {display: "inline-block"};
};

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
                    <td onClick={hideDetail = !hideDetail}>{elem.name}</td>
                    <td style={displayDetail()}>{elem.detail}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Employees;
