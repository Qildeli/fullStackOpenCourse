import React from 'react';
import Person from './Person';

const PersonsList = ({ persons }) => {
    return (
        <ul>
            {persons.map(person =>
                <Person key={person.name} name={person.name} number={person.number} />
            )}
        </ul>
    );
};

export default PersonsList;
