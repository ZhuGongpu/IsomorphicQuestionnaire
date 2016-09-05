/**
 * Created by ZhuGongpu on 16/8/29.
 */

import React, {PropTypes} from "react";
import {Select} from "antd";
const Option = Select.Option;

class Dropdown extends React.Component {

    static getNestingLevel(options) {
        if (!options) return 0;
        return 1 + Math.max(... options.map(item => Dropdown.getNestingLevel(item.children)));
    }

    render() {
        //TODO: update
        const {currentSelections, placeholder, className, onChange, options} = this.props;





        // return <Select className={className}
        //                placeholder={placeholder}
        //                value={currentSelection}
        //                allowClear
        //                onChange={onChange}>
        //     {options.map(option => <Option value={option.id}>{option.text}</Option>)}
        // </Select>
    }
}

Dropdown.propTypes = {
    currentSelections: PropTypes.array,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholders: PropTypes.array.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        children: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired,
            children: PropTypes.array
        })).isRequired
    })).isRequired
};

export default Dropdown;