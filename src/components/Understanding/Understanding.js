import React, {Component} from 'react';
import Review from '../Review/Review.js'
import {connect} from 'react-redux';

class Understanding extends Component {
    constructor() {
        super();
        this.state = {
            understanding: 0,
        }
    }

    // changes state when input field is filled
    handleInputChange = (event) => {
        this.setState({
            understanding: event.target.value
        });
    }

    // runs when next button is clicked.
    handleNextButton = () => {
        console.log('next btn clicked');
        const action = {type: 'SET_UNDERSTANDING', payload: this.state.understanding}
        this.props.dispatch(action)
        this.props.history.push('/thirdpage')
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <select onChange={this.handleInputChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleNextButton}>Next</button>
                <Review />
            </div>
        );
    }
}

export default connect()(Understanding);