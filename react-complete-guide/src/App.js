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
        otherState: 'some other value'
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

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>React project</h1>
                <p>Esto es real</p>
                Mas ineficiente ya que react hace un rerender. switchNameHandler.bind(this, 'Lenin 1')
                Recomendada switchNameHandler.bind(this, 'Lenin 2')
                <button onClick={this.switchNameHandler.bind(this, 'aaa')}
                    style={style}
                >Swith Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
                        change={this.nameChangedHandler}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Lenin 2')}
                        change={this.nameChangedHandler}
                >
                    My Hobbies: Racing
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}
                        click={() => this.switchNameHandler.bind(this, 'Lenin 4')} change={this.nameChangedHandler}/>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
