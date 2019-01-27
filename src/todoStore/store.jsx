import React, { Component } from 'react';
import { observable, computed, autorun } from 'mobx';



class ObservableTodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;
    @observable inputValueAdd = '';
    @observable inputValueChange = '';
    @observable visible = false;

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

        return `Next todo: "${this.todos.slice().reverse()[0].task}".` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }
    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        })
    }
    changeTodo(task, index) {
        this.todos[index] = { ...this.todos[index], task };
    }
}


const TodoStore = new ObservableTodoStore();



class RootStore {
    constructor() {
        // this.userStore = new UserStore(this)
        this.todoStore = new ObservableTodoStore(this)
    }
}


const Store = new RootStore();

export default Store;