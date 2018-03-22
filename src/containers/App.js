import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';

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
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler} />;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    appTitle={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonHandler} />
                {persons}
            </div>
        );
    }
}

export default App;
