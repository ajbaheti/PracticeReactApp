import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons: [
            { name: "Ashish", age: 27 },
            { name: "Siddhant", age: 26 },
            { name: "Yash", age: 29 }
        ],
        otherState: "this won't change"
    };

    switchNameHandler = (newName) => {
        // console.log("Button was clicked!");
        this.setState({
            persons: [
                { name: newName, age: 27 },
                { name: "Siddhant", age: 26 },
                { name: "Yash", age: 25 }
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: "Ashish", age: 27 },
                { name: event.target.value, age: 26 },
                { name: "Yash", age: 25 }
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: 'grey',
            font: 'inherit',
            border: '1px solid red',
            padding: '8px',
            cursor: 'pointer',
            outline: 'none'
        };

        return (
            <div className="App">
                <h1> I'm a react app</h1>
                <p className="test">This is really working...!!!</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('AB')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'AB')}
                    changed={this.nameChangedHandler}>My Hobbies: Numismatic</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
