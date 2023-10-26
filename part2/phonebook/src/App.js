import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';

const App = () => {
    const [persons, setPersons] = useState([])

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

    // Using an Effect hook to fetch initial data from the server
    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
