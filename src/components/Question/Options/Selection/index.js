/**
 * Single / Multiple Selection(s)
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {Radio, Checkbox, Input, Tag, Button, Popconfirm} from "antd";
import {fromJS} from "immutable";
import styles from "./index.scss";
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

class Selection extends React.Component {

    onCheckChange(checkedValues) {
        this.props.onSelectionChange(checkedValues);
    }

    onSelectChange(e) {
        this.props.onSelectionChange(e.target.value);
    }

    //region Edit
    onInputChange(e) {
        const {onOptionInputChange} = this.props;
        if (onOptionInputChange) {
            onOptionInputChange(e.target.value)
        }
    }

    onOptionAdded() {
        const {input, onOptionAdded} = this.props;
        if (onOptionAdded)
            onOptionAdded({text: input});//id is generated outside
    }

    onOptionDeleted(index) {
        const {onOptionDeleted} = this.props;
        if (onOptionDeleted)
            onOptionDeleted(index);
    }

    //endregion

    //region render
    buildSelections(currentSelection, options, selectionItemClassName, allowMultiSelection) {

        return allowMultiSelection ?
            <CheckboxGroup options={options.map(option => ({label: option.text, value: option.id}))}
                           value={currentSelection}
                           onChange={this.onCheckChange.bind(this)}/> :
            <RadioGroup onChange={this.onSelectChange.bind(this)} value={currentSelection}>
                {options.map(option =>
                    <Radio key={option.id}
                           className={`${styles["radio-item"]} ${selectionItemClassName}`}
                           value={option.id}>
                        {option.text}
                    </Radio>
                )}
            </RadioGroup>
    }

    buildEditableSelections(options, input) {
        return <div>
            {
                options.map((option, index) =>
                    <Tag key={option.id} closable
                         afterClose={this.onOptionDeleted.bind(this, index)}>
                        {option.text}
                    </Tag>
                )
            }
            {<Popconfirm
                title={<Input placeholder="输入选项" value={input} onChange={this.onInputChange.bind(this)}/>}
                onConfirm={this.onOptionAdded.bind(this)}
                arrowPointAtCenter={true}>
                <Button size="small" type="dashed">+ 添加</Button>
            </Popconfirm>}
        </div>
    }

    render() {
        const {editing, currentSelection, options, input, selectionItemClassName, allowMultiSelection} = this.props;
        return editing ? this.buildEditableSelections(options, input) :
            this.buildSelections(currentSelection, options, selectionItemClassName, allowMultiSelection);
    }

    //endregion
}

Selection.propTypes = {
    currentSelection: PropTypes.any,
    editing: PropTypes.bool,
    allowMultiSelection: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    selectionItemClassName: PropTypes.string,
    onSelectionChange: PropTypes.func.isRequired,
    onOptionAdded: PropTypes.func,
    onOptionDeleted: PropTypes.func,
    onOptionInputChange: PropTypes.func
};

Selection.defaultProps = {
    options: []
};

export default Selection;