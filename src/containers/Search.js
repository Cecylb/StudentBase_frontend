import React from "react";
import {connect} from "react-redux";
import {fetchSearchResult} from "../utils/actions";
import {withRouter} from "react-router-dom";
import displayAlert from "../alert";

const {Component} = require("react");

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            alert: this.props.alert,
            result: this.props.result
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.result !== prevProps.result) {
            this.setState({result: this.props.result});
        }
        if(this.props.alert !== prevProps.alert) {
            this.setState({alert: this.props.alert})
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.fetchSearchResult(this.state.id)
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    renderTable(result) {
        let data = [];
        for (let i = 0; i < result.length; i++) {
            const entry = result[i];
            const row = (
                <tr>
                    {
                        Object.keys(entry).map(function (element) {
                            return (<td>{entry[element]}</td>);
                        })
                    }
                </tr>
            )
            data.push(row);
        }
        return (
            <div>
                <table className='table'>
                    <thead>
                    {
                        Object.keys(result[0]).map(function (element) {
                            return <th scope='col'>{element}</th>;
                        })
                    }
                    </thead>
                    <tbody>
                    {data}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        const {result, alert} = this.state;
        const table = result.length !== 0
            ? this.renderTable(result)
            : null;
        const alertBlock = alert.state
            ? displayAlert(alert.error)
            : null;
        return (
            <div>
                {alertBlock}
                <div className='jumbotron'>
                    <div className='container'>
                        <h1 className="display-3"> Search in database </h1>
                    </div>
                </div>
                <div className='container'>
                    <form className='input-group mb-3' onSubmit={this.handleSubmit}>
                        <input className='form-control mr-sm-2' placeholder='Id' type='text' name='id' onChange={this.handleChange}/>
                        <button className='btn btn-secondary' type='submit'>Search</button>
                    </form>
                    <div>
                        {table}
                    </div>
                </div>
            </div>

        )
    }
}

function mapState(state) {
    return {
        result: state.fetchReducer.result,
        alert: state.app.alert
    }
}

const actions = {
    fetchSearchResult: fetchSearchResult
}

export default withRouter(connect(mapState, actions)(Search));