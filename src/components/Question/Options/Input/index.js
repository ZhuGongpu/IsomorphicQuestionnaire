/**
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {Input as InputBox} from "antd";

class Input extends React.Component {

    onChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const {currentValue, placeholder, className} = this.props;

        return <InputBox className={className}
                         placeholder={placeholder}
                         value={currentValue}
                         onChange={this.onChange.bind(this)}/>
    }
}

Input.propTypes = {
    currentValue: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Input;