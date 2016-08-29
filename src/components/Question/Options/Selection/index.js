/**
 * Single / Multiple Selection(s)
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {Radio, Checkbox} from "antd";
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

class Selection extends React.Component {

    onCheckChange(checkedValues) {
        //TODO
        console.log("Questionnaire onCheckChange: %O", checkedValues);
        this.props.onSelectionChange(checkedValues);
    }

    onSelectChange(e) {
        //TODO
        console.log("Questionnaire onSelectChange: %o", e.target.value);
        this.props.onSelectionChange(e.target.value);
    }

    render() {
        const {currentSelection, options, selectionItemClassName, allowMultiSelection} = this.props;

        return allowMultiSelection ?
            <CheckboxGroup options={options.map(option => ({label: option.text, value: option.id}))}
                           value={currentSelection}
                           onChange={this.onCheckChange.bind(this)}/> :
            <RadioGroup onChange={this.onSelectChange.bind(this)} value={currentSelection}>
                {options.map(option =>
                    <Radio key={option.id}
                           className={selectionItemClassName}
                           value={option.id}>
                        {option.text}
                    </Radio>
                )}
            </RadioGroup>
    }
}

Selection.propTypes = {
    currentSelection: PropTypes.any,
    allowMultiSelection: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    selectionItemClassName: PropTypes.string,
    onSelectionChange: PropTypes.func.isRequired
};

export default Selection;