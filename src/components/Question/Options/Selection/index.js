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

function generateOptionID(options) {
    return Math.max(...options.map(option => option.id)) + 1
}

class Selection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }
    }

    onCheckChange(checkedValues) {
        this.props.onSelectionChange(checkedValues);
    }

    onSelectChange(e) {
        this.props.onSelectionChange(e.target.value);
    }

    onInputChange(e) {
        this.setState({input: e.target.value})
    }

    onOptionAdded() {
        const options = this.props.options;
        const {input} = this.state;

        const id = generateOptionID(options);
        this.props.onOptionsEdited(fromJS(options).push({id, text: input}).toJS());
    }

    onOptionDeleted(index) {
        const options = this.props.options;
        this.props.onOptionsEdited(fromJS(options).delete(index).toJS());
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
        const {input} = this.state;

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
                title={<Input placeholder="基本使用" currentValue={input} onChange={this.onInputChange.bind(this)}/>}
                onConfirm={this.onOptionAdded.bind(this)}
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
    onSelectionChange: PropTypes.func.isRequired,
    onOptionsEdited: PropTypes.func // parameter is newOptions
};

export default Selection;