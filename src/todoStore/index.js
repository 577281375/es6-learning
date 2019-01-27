/*
 * @Author: songxue
 * @Date: 2019-01-26 16:08:41
 * @Last Modified by: songxue
 * @Last Modified time: 2019-01-27 14:39:03
 * @Module Name: Ten minute introduction to MobX and React eg: https://mobx.js.org/getting-started.html
 *
 */

import React, { Component } from 'react';
import { inject, observer, Provider } from "mobx-react";
import { observable } from 'mobx';
import TodoView from './component';
import store from './store';

@inject('store')
@observer
class TodoList extends Component {
    @observable handleTodoIndex = null;
    handleClickAdd = () => {
        const { store: { inputValueAdd } } = this.props;
        this.props.store.addTodo(inputValueAdd);
    }
    handleClickChange = (e) => {
        const { store } = this.props;
        store.changeTodo(store.inputValueChange, this.handleTodoIndex);
        store.visible = false;
    }

    handleChange = (name) => (e) => {
        const { store } = this.props;
        store[`inputValue${name}`] = e.target.value;
    }


    handleTodo = (index) => {
        this.handleTodoIndex = index;
    }
    render() {
        const { store: { report, todos, visible } } = this.props;
        return (
            <div>
                {report}
                <ul>
                    {
                        todos.map(
                            (todo, idx) => <TodoView
                                key={idx}
                                todo={todo}
                                idx={idx}
                                handle={this.handleTodo}
                            />
                        )
                    }
                </ul>
                <input placeholder='place add item' onChange={this.handleChange('Add')} />
                <button onClick={this.handleClickAdd}>add item</button>
                {
                    visible &&
                    <div>
                        <input placeholder='place change item' onChange={this.handleChange('Change')} />
                        <button onClick={this.handleClickChange}>change item</button>
                    </div>
                }
            </div>
        )
    }
}

class Todo extends React.Component {
    render() {
        return (
            <Provider store={store.todoStore}>
                <TodoList />
            </Provider>
        )
    }
}

export default Todo;





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
// class TodoStoreDemo {
//     todos = [];
//     get completedTodosCount() {
//         return this.todos.filter(
//             todo => todo.completed === true
//         ).length;
//     }
//     report() {
//         if (this.todos.length === 0) {
//             return "<none>";
//         }
//         return `Next todo: "${this.todos[0].task}".` +
//             `Progress: ${this.completedTodosCount}/${this.todos.length}`;
//     }
//     addTodo(task) {
//         this.todos.push({
//             task: task,
//             completed: false,
//             assignee: null
//         })
//     }
// }




// class TodoStore extends Component {
//     constructor() {
//         super();
//         // if use TodoStoreDemo class
//         // this.demo = new TodoStoreDemo();
//         // if use TodoStoreDemo class
//         this.demo = new ObservableTodoStore();

//         this.state = {
//             value: '',
//             report: '',
//         }
//     }

//     handleChange = (e) => {
//         this.setState({
//             value: e.target.value,
//         })
//     }
//     handleClick = () => {
//         this.demo.addTodo(this.state.value);

//         // if use TodoStoreDemo class
//         // console.log(this.demo.report());
//     }
//     render() {
//         const { value } = this.state;
//         return (
//             <div>
//                 <input onChange={this.handleChange} value={value} />
//                 <br />
//                 <button onClick={this.handleClick}>console</button>
//             </div>
//         )
//     }
// }