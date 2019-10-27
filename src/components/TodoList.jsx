import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import TodoListItem from "./TodoListItem";
import List from "@material-ui/core/List";

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.items.length > 0 && (
                    <Paper style={{margin: 16}}>
                        <List style={{overflow: "scroll"}}>
                            {this.props.items.map((todo, idx) => (
                                <TodoListItem
                                    {...todo}
                                    id={todo._id}
                                    title={todo.title}
                                    body={todo.recordBody}
                                    status={todo.status}
                                    key={todo._id}
                                    divider={idx !== this.props.items.length - 1}
                                    onDeleteRecord={() => this.props.onDelete(todo._id)}
                                    onEditRecord={() => this.props.onEdit(todo._id)}
                                    onClick = {()=>this.props.onShow(todo._id)}
                                />
                            ))}
                        </List>
                    </Paper>
                )}
            </div>
        );
    }
}

export default TodoList;