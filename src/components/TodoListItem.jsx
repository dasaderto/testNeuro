import React, {Component} from 'react';
import {ListItem, IconButton, ListItemText, ListItemSecondaryAction} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import EditOutlined from "@material-ui/icons/EditOutlined";
class TodoListItem extends Component {
    render() {
        return (
            <ListItem divider={this.props.divider} onClick={this.props.onClick}>
                <ListItemText primary={`Title: ${this.props.title}`}/>
                <ListItemText primary={`Body: ${this.props.recordBody}`}/>
                <ListItemText primary={`Status: ${this.props.status}`}/>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Edit Todo" onClick={this.props.onEditRecord}>
                        <EditOutlined/>
                    </IconButton>
                    <IconButton aria-label="Delete Todo" onClick={this.props.onDeleteRecord}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default TodoListItem;