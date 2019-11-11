import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
    const [personsState, setPersonsState] = useState({
        persons: [{
            name: 'Lenin',
            age: '31'
        }, {
            name: 'Diana',
            age: '29'
        }, {
            name: 'Liz',
            age: '27'
        }],
        otherState: 'Some value'
    });
    const switchNameHandler = (newName) => {
        console.log('Was clicked!');
        // DONT DO THIS this.state.persons[0].name = 'LENIN';
        setPersonsState({
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
    const nameChangedHandler = (event) => {
        console.log('Was clicked!');
        // DONT DO THIS this.state.persons[0].name = 'LENIN';
        setPersonsState({
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
    return (
        <div className="App">
            <h1>React project</h1>
            <p>Esto es real</p>
            Mas ineficiente ya que react hace un rerender. switchNameHandler.bind(this, 'Lenin 1')
            Recomendada switchNameHandler.bind(this, 'Lenin 2')
            <button onClick={switchNameHandler.bind(this, 'Lenin 1')}>Swith Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} change={nameChangedHandler}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}
                click={switchNameHandler.bind(this, 'Lenin 2')}
                change={nameChangedHandler}
            >
                My Hobbies: Racing
            </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}
                    click={()=> switchNameHandler('Lenin 4')} change={nameChangedHandler}/>
        </div>
    );
};
export default App;
