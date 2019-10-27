import React, {Component} from 'react';
import AddTodo from "../../components/AddTodo";
import Layout from "../../components/Layout";
import TodoList from "../../components/TodoList";
import {
    appendRecord,
    deleteRecord,
    fetchRecords,
    editRecord,
    updateRecord,
    showRecord
} from "../../actions/records-actions";
import {connect} from 'react-redux';
import {store} from "../../reducers/rootReducer";
import EditTodo from "../../components/EditTodo";
import ShowTodo from "../../components/ShowTodo";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            records: [],
            showingRecord: {},
            editedRecord: {},
            errors: {}
        };

    }

    componentDidMount() {
        this.props.fetchRecords();
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                ...this.state,
                records: store.getState().records.records,
                editedRecord: store.getState().records.editedRecord,
                showingRecord: store.getState().records.showingRecord,
                errors: store.getState().errors.errors
            })
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <Layout>
                <AddTodo
                    onAppendRecord={(record) => this.props.appendRecord(record)}
                />
                {Object.keys(this.state.editedRecord).length ? (
                    <EditTodo
                        onSave={(record) => this.props.updateRecord(record, this.state.editedRecord._id)}
                        title={this.state.editedRecord.title}
                        body={this.state.editedRecord.body}
                        status={this.state.editedRecord.status}
                    />
                ) : null}
                {Object.keys(this.state.showingRecord).length ? (
                    <ShowTodo
                        title={this.state.showingRecord.title}
                        body={this.state.showingRecord.recordBody}
                        status={this.state.showingRecord.status}
                    />
                ) : null}
                <TodoList
                    items={this.state.records}
                    onDelete={this.props.deleteRecord}
                    onEdit={this.props.editRecord}
                    onShow={this.props.showRecord}
                />
            </Layout>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    records: state.records,
});

const mapActionsToProps = {
    appendRecord,
    updateRecord,
    deleteRecord,
    fetchRecords,
    editRecord,
    showRecord
};

export default connect(mapStateToProps, mapActionsToProps)(Home);