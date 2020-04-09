import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from  'react-redux';

import * as todosActions from './actions/todos';

export class TodoList extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    state = {
        newTodoText: '',
    };

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);

        this.setState({ newTodoText: '' });
    };

    render() {
        return (
            <div>
                    <input 
                    type="text"
                    value={this.state.newTodoText}
                    onChange={(e) => this.setState({ newTodoText: e.target.value })}
                    />
                    <button onClick={this.addNewTodo} >Adicionar</button>
                <ul>
                    { this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    )) }
                </ul>


            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
});


// Simplesmente estou passando as ações como propriedade também usando a função connect do react-redux
const mapDispatchToProps = dispatch => 
bindActionCreators(todosActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);




