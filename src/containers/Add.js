import React from "react";
import {connect} from "react-redux";
import {addNewEntity, fetchTableFields} from "../utils/actions";
import {withRouter} from "react-router-dom";
import displayAlert from "../alert";

const {Component} = require("react");

class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: this.props.fields,
            alert: this.props.alert
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleFieldsSubmit = this.handleFieldsSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.props.fetchTableFields();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.fields !== prevProps.fields) {
            const fields = new Map();
            for (let i = 0; i < this.props.fields.length; i++) {
                fields.set(this.props.fields[i], "")
            }
            this.setState({fields: fields});
        }
        if (this.props.alert !== prevProps.alert) {
            this.setState({alert: this.props.alert})
        }
    }

    handleFieldsSubmit(event) {
        event.preventDefault();
        this.props.addNewEntity(this.emptyToNull(this.state.fields));
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    handleFieldChange(event) {
        event.preventDefault();
        this.state.fields.set(event.target.name, event.target.value);
    }

    emptyToNull(fields) {
        const fieldsWithNull = new Map();
        fields.forEach((v, k) => {if(v === "") { fieldsWithNull.set(k, null)} else { fieldsWithNull.set(k, v)}});
        console.log("fieldsWithNull", fieldsWithNull);
        return fieldsWithNull;
    }

    renderForm(fields) {
        let data = [];
        for (let key of fields.keys()) {
            let row = (
                <div className='form-group'>
                    <input className='form-control' placeholder={key} type='text' name={key} onChange={this.handleFieldChange}/>
                </div>
               )
            data.push(row);
        }
        return (
            <form className='form-group' onSubmit={this.handleFieldsSubmit}>
                {data}
                <button className='btn btn-outline-secondary' type='submit'>Add</button>
            </form>
        );
    }

    render() {
        const {fields, alert} = this.state;
        const form = fields.length !== 0
            ? this.renderForm(fields)
            : null;
        const alertBlock = alert.state
            ? displayAlert(alert.error)
            : null;
        return (
            <div>
                {alertBlock}
                <div className='jumbotron'>
                    <div className='container'>
                        <h1 className="display-3"> Add to database </h1>
                    </div>
                </div>
                <div className='container'>
                    <div>
                        {form}
                    </div>
                </div>
            </div>

        )
    }
}

function mapState(state) {
    return {
        fields: state.fetchReducer.fields,
        alert: state.app.alert
    }
}

const actions = {
    fetchTableFields: fetchTableFields,
    addNewEntity: addNewEntity
}

export default withRouter(connect(mapState, actions)(Add));