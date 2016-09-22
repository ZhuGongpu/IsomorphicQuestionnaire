/**
 * Question Type Picker
 * Created by ZhuGongpu on 16/9/20.
 */
import React, {PropTypes} from "react";
import {Menu} from "antd";
import "./index.scss";
import {QuestionType} from "../../enums/QuestionType";
const MenuItem = Menu.Item;

class QuestionTypePicker extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        console.log("QuestionTypePicker: onClick: %o", e.key);
        this.props.onSelected(e.key)
    }

    render() {
        //TODO:
        return <div className="question-type-picker">
            <h3>题型</h3>
            <Menu onClick={this.onClick}>
                {Object.keys(QuestionType).map(key => {
                    const type = QuestionType[key];
                    return <MenuItem key={type.value}>{type.text}</MenuItem>
                })}
            </Menu>
        </div>
    }
}

QuestionTypePicker.propTypes = {
    onSelected: PropTypes.func.isRequired
};

export default QuestionTypePicker;
