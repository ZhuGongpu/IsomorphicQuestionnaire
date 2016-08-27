import React from "react";
import {increaseAsync, increase} from "./actions";
import {connect} from 'react-redux';
import {selectCounter} from "./selectors";
import {createSelector} from "reselect";

class Counter extends React.Component {
    render() {
        // console.log("Counter: props: %o", this.props);
        return (
            <div>
                <div>Counter: {this.props.counter}</div>
                <button onClick={this.props.increase.bind(this)}>Increase</button>
            </div>
        )
    }
}

const mapStateToProps = createSelector(selectCounter(), counter => ({counter}))
const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            // console.log("onclick");
            dispatch(increaseAsync())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
