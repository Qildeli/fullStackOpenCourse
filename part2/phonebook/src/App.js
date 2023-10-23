import { useState } from 'react'

import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const addName = () => {
        console.log("Adding new name");
        const doesNameExist = persons.some(person =>
            person.name.toLowerCase() === newName.toLowerCase()
        );

        if (doesNameExist) {
            alert(`${newName} is already added to phonebook`);
        } else {
            const newPerson = {
                id: persons.length + 1,
                name: newName,
                number: newNumber
            };
            setPersons(persons.concat(newPerson));
            setNewName('');
            setNewNumber('');
        }
    }


    // Filter persons based on the search term, case-insensitively
    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchFilter searchTerm={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <h2>add a new</h2>
            <PersonForm
                newName={newName}
                newNumber={newNumber}
                onNameChange={(event) => setNewName(event.target.value)}
                onNumberChange={(event) => setNewNumber(event.target.value)}
                onSubmit={(event) => {
                    event.preventDefault();
                    addName();
                }}
            />
            <h2>Numbers</h2>
            <PersonsList persons={filteredPersons} />
        </div>
    );
}

export default App
