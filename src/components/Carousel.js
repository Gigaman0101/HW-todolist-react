import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends Component {
    state = {
        counter: 0,
    }
    render() {
        return (
            <div>
                <button
                    style={{ width: "150px", height: "150px", fontSize: "25px" }}
                    disabled={this.state.counter === 0}
                    onClick={() => this.setState({ counter: this.state.counter - 1 })}
                >
                    prev
                </button>
                <img
                    style={{ width: "600px", height: "600px" }}
                    src={this.props.picList[this.state.counter]}
                    alt={"hello"}
                />
                <button
                    style={{ width: "150px", height: "150px", fontSize: "25px" }}
                    disabled={this.state.counter === 3}
                    onClick={() => this.setState({ counter: this.state.counter + 1 })}
                >
                    next
                </button>
            </div>
        )
    }
}

Carousel.propTypes = {
    picList: PropTypes.array,
};
