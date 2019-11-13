import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    };
    switchNameHandler = (newName) => {
        console.log('Was clicked!');
        // DONT DO THIS this.state.persons[0].name = 'LENIN';
        this.setState({
            persons: [{
                name: newName,
                age: '31'
            }, {
                name: 'Diana',
                age: '29'
            }, {
                name: 'Liz',
                age: '27'
            }]
        })
    };
    nameChangedHandler = (event) => {
        console.log('Was clicked!');
        // DONT DO THIS this.state.persons[0].name = 'LENIN';
        this.setState({
            persons: [{
                name: 'lenin',
                age: '31'
            }, {
                name: event.target.value,
                age: '29'
            }, {
                name: 'Liz',
                age: '27'
            }]
        })
    };

    deletePersonHandler(index) {
        this.state.persons.splice(index, 1);
        this.setState(this.state.persons);
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}/>;
                    })}
                    {/*<Person name={this.state.persons[0].name} age={this.state.persons[0].age}*/}
                    {/*        change={this.nameChangedHandler}/>*/}
                    {/*<Person name={this.state.persons[1].name} age={this.state.persons[1].age}*/}
                    {/*        click={this.switchNameHandler.bind(this, 'Lenin 2')}*/}
                    {/*        change={this.nameChangedHandler}*/}
                    {/*>*/}
                    {/*    My Hobbies: Racing*/}
                    {/*</Person>*/}
                    {/*<Person name={this.state.persons[2].name} age={this.state.persons[2].age}*/}
                    {/*        click={() => this.switchNameHandler.bind(this, 'Lenin 4')}*/}
                    {/*        change={this.nameChangedHandler}/>*/}

                </div>
            );
        }
        return (
            <div className="App">
                <h1>React project</h1>
                <p>Esto es real</p>
                Mas ineficiente ya que react hace un rerender. switchNameHandler.bind(this, 'Lenin 1')
                Recomendada switchNameHandler.bind(this, 'Lenin 2')
                <button onClick={this.togglePersonsHandler}
                        style={style}
                >toggle content</button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
