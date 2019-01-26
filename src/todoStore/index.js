/*
 * @Author: songxue
 * @Date: 2019-01-26 16:08:41
 * @Last Modified by: songxue
 * @Last Modified time: 2019-01-26 18:03:10
 * @Module Name: Ten minute introduction to MobX and React eg: https://mobx.js.org/getting-started.html
 */

import React, { Component } from 'react';
import { observable, computed, autorun } from 'mobx';
import { observer } from 'mobx-react';



class ObservableTodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;
    @observable inputValue = '';

    constructor() {
        autorun(() => console.log(this.report));
    };
    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }
    @computed get report() {
        if (this.todos.length === 0) {
            return "<none>";
        }
        return `Next todo: "${this.todos[0].task}".` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }
    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        })
    }
}

@observer
class TodoList extends Component {
    handleClick = () => {
        const { store: { inputValue } } = this.props;
        this.props.store.addTodo(inputValue);
    }
    handleChange = (e) => {
        const { store } = this.props;
        store.inputValue = e.target.value;
    }
    render() {
        const { store: { report, todos, inputValue } } = this.props;
        return (
            <div>
                {report}
                <ul>
                    {
                        todos.map(
                            (todo, idx) => <TodoView key={idx} todo={todo} inputValue={inputValue}/>
                        )
                    }
                </ul>
                <input placeholder='place add item' onChange={this.handleChange} value={inputValue} />
                <button onClick={this.handleClick}>add item</button>
            </div>
        )
    }
}


@observer
class TodoView extends Component {

    handleClick = (e) => {
        const todo = this.props.todo;
        const { inputValue } = this.props;
        todo.task = inputValue;
    }
    render() {
        const { todo } = this.props;
        return (
            <div onDoubleClick={this.handleClick}>{todo.task}</div>
        )
    }
}

// quiz : store 组建间的通信 mobx-react inject

// @observer
// class TodoList extends React.Component {
//     render() {
//         const store = this.props.store;
//         return (
//             <div>
//                 {store.report}
//                 <ul>
//                     {store.todos.map(
//                         (todo, idx) => <TodoView todo={todo} key={idx} />
//                     )}
//                 </ul>
//                 {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
//                 <button onClick={this.onNewTodo}>New Todo</button>
//                 <small> (double-click a todo to edit)</small>
//                 {/* <RenderCounter /> */}
//             </div>
//         );
//     }

//     onNewTodo = () => {
//         this.props.store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
//     }
// }

// @observer
// class TodoView extends React.Component {
//     render() {
//         const todo = this.props.todo;
//         return (
//             <li onDoubleClick={this.onRename}>
//                 <input
//                     type='checkbox'
//                     checked={todo.completed}
//                     onChange={this.onToggleCompleted}
//                 />
//                 {todo.task}
//                 {todo.assignee
//                     ? <small>{todo.assignee.name}</small>
//                     : null
//                 }
//                 {/* <RenderCounter /> */}
//             </li>
//         );
//     }

//     onToggleCompleted = () => {
//         const todo = this.props.todo;
//         todo.completed = !todo.completed;
//     }

//     onRename = () => {
//         const todo = this.props.todo;
//         todo.task = prompt('Task name', todo.task) || todo.task;
//     }
// }


class Todo extends React.Component {
    render() {
        return (
            <TodoList store={new ObservableTodoStore()} />
        )
    }
}


export default Todo;




class TodoStoreDemo {
    todos = [];
    get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }
    report() {
        if (this.todos.length === 0) {
            return "<none>";
        }
        return `Next todo: "${this.todos[0].task}".` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }
    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        })
    }
}




class TodoStore extends Component {
    constructor() {
        super();
        // if use TodoStoreDemo class
        // this.demo = new TodoStoreDemo();
        // if use TodoStoreDemo class
        this.demo = new ObservableTodoStore();

        this.state = {
            value: '',
            report: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    handleClick = () => {
        this.demo.addTodo(this.state.value);

        // if use TodoStoreDemo class
        // console.log(this.demo.report());
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <input onChange={this.handleChange} value={value} />
                <br />
                <button onClick={this.handleClick}>console</button>
            </div>
        )
    }
}