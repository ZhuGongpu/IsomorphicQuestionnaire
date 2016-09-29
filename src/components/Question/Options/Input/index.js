/**
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {Input as InputBox} from "antd";
import styles from "./index.scss";

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {input: null};
    }

    componentWillReceiveProps(nextProps) {
        // commit changes when editing status changes
        const {editing, onPlaceholderEdited} = this.props;
        if (!nextProps.editing && editing && onPlaceholderEdited) {
            onPlaceholderEdited(this.state.input)
        }
    }

    onChange(e) {
        this.props.onChange(e.target.value);
    }

    onPlaceholderEdited(e) {
        this.setState({input: e.target.value})
    }

    buildInput() {
        const {currentValue, placeholder} = this.props;
        return <InputBox className={styles["input"]}
                         placeholder={placeholder}
                         value={currentValue}
                         onChange={this.onChange.bind(this)}/>
    }

    buildEditingInput() {
        const {placeholder} = this.props;
        const {input} = this.state;

        return <div>
            问题提示:
            <InputBox className={styles["input"]}
                      placeholder="请输入问题提示"
                      value={input || placeholder}
                      onChange={this.onPlaceholderEdited.bind(this)}/>
        </div>
    }

    render() {
        const {editing} = this.props;
        return editing ? this.buildEditingInput() : this.buildInput()
    }
}

Input.propTypes = {
    currentValue: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    editing: PropTypes.bool,
    onPlaceholderEdited: PropTypes.func
};

export default Input;