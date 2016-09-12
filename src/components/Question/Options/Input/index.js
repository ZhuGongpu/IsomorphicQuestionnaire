/**
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {Input as InputBox} from "antd";
import styles from "./index.scss";

class Input extends React.Component {

    onChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const {currentValue, placeholder} = this.props;

        return <InputBox className={styles["input"]}
                         placeholder={placeholder}
                         value={currentValue}
                         onChange={this.onChange.bind(this)}/>
    }
}

Input.propTypes = {
    currentValue: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Input;