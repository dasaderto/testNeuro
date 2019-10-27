import React, {Component} from 'react';
import {TextField, Paper, Button, Grid} from "@material-ui/core";

class AddTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isValid: true,
            title: "",
            recordBody: "",
            status: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateRecord = this.handleCreateRecord.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleCreateRecord() {
        let isValid = true;
        const record = {
            title: this.state.title,
            recordBody: this.state.recordBody,
            status: this.state.status
        };
        for(let item in record){
            if (record[item] === ""){
                alert(`${item} can not be empty`);
                isValid = false;
                break;
            }
        }
        if(isValid) this.props.onAppendRecord(record);
    }

    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={10} md={11} item style={{paddingRight: 16}}>
                        <TextField
                            placeholder="Введите title"
                            value={this.state.title}
                            name={"title"}
                            onChange={this.handleInputChange}
                            fullWidth
                        />
                        <TextField
                            placeholder="Введите body"
                            value={this.state.recordBody}
                            name={"recordBody"}
                            onChange={this.handleInputChange}
                            fullWidth
                        />
                        <TextField
                            placeholder="Введите status"
                            value={this.state.status}
                            name={"status"}
                            onChange={this.handleInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid xs={2} md={1} item>
                        <Button
                            fullWidth
                            color="secondary"
                            variant="outlined"
                            onClick={this.handleCreateRecord}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;