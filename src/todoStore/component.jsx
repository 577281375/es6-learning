import React, { Component } from 'react';
import { inject, observer} from "mobx-react";

@inject('store')
@observer
class TodoView extends Component {
    handleClick = (e) => {
        const { store, idx } = this.props;
        store.visible = true;
        this.props.handle(idx);
    }
    handleChange = (e) => {
        const { todo } = this.props;
        todo.completed = !todo.completed;
    }
    render() {
        const { todo } = this.props;
        return (
            <div onClick={this.handleClick}>
                <input type='checkbox' checked={todo.completed} onChange={this.handleChange} />
                {todo.task}
            </div>

        )
    }
}

export default TodoView;