import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons: [
            { id: "ljkgkg", name: "Ashish", age: 27 },
            { id: "ldnf", name: "Siddhant", age: 26 },
            { id: "kjsadfsa", name: "Yash", age: 29 }
        ],
        otherState: "this won't change",
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice(); OR spread operator
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };  //OR
        // const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex].name = person.name;

        this.setState({persons: persons});
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid red',
            padding: '8px',
            cursor: 'pointer',
            outline: 'none'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person,index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)} />
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }

        return (
            <div className="App">
                <h1> I'm a react app</h1>
                <p className="test">This is really working...!!!</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
