/**
 * Single / Multiple Selection(s)
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {Radio, Checkbox, Input, Tag, Button, Popconfirm} from "antd";
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

    onInputChange(e) {
        //TODO:
        console.log("onInputChange: %o", e.target.value)
    }

    onOptionAdded(e) {
        //TODO:
    }

    onOptionDeleted(index, option) {
        //TODO:
    }

    //region render
    buildSelections() {
        const {currentSelection, options, selectionItemClassName, allowMultiSelection} = this.props;

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

    buildEditableSelections() {
        const {options} = this.props;

        return <div>
            {
                options.map((option, index) =>
                    <Tag key={option.id} closable
                         afterClose={this.onOptionDeleted.bind(index, option)}>
                        {option.text}
                    </Tag>
                )
            }
            {<Popconfirm title={<Input placeholder="基本使用" onChange={this.onInputChange.bind(this)}/>}
                         onConfirm={this.onOptionAdded.bind(this)}
                         onCancel={() => console.log("CANCEL")}
                         arrowPointAtCenter={true}>
                <Button size="small" type="dashed">+ 添加</Button>
            </Popconfirm>}

        </div>
    }

    render() {
        return this.props.editing ? this.buildEditableSelections() : this.buildSelections();
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
    onSelectionChange: PropTypes.func.isRequired
};

export default Selection;