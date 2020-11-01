import React from "react";
import {withRouter} from "react-router-dom";
import {Component} from "react";

class Home extends Component {

    renderButtons(buttonValues) {
        const buttons = [];
        for (let i = 0; i < buttonValues.length; i++) {
            buttons.push(this.getButton(buttonValues[i][0], buttonValues[i][1]));
        }
        return buttons;
    }

    getButton(page, name) {
        return (
            <div className='col-md-3'>
                <p>
                    <a className='btn btn-secondary btn-lg' role='button' href={page}> {name} </a>
                </p>
            </div>
        )
    }

    render() {
        const buttonValues = [["search", "Search"], ["add", "Add value"], ["remove", "Remove value"]];
        const buttonRender = this.renderButtons(buttonValues);
        return (
            <div>
                <div className='jumbotron'>
                    <div className='container'>
                        <h1 className="display-3"> Database web application </h1>
                        <p className='lead'> A simple webapp for the included database. Please select one of the actions below </p>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        {buttonRender}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home)