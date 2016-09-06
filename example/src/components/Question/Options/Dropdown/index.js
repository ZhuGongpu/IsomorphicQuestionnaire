/**
 * Created by ZhuGongpu on 16/8/29.
 */

import React, {PropTypes} from "react";
import {Select} from "antd";
const Option = Select.Option;
import styles from  "./index.scss";


class Dropdown extends React.Component {

    static getNestingLevel(options) {
        if (!options) return 0;
        return 1 + Math.max(... options.map(item => Dropdown.getNestingLevel(item.children)));
    }

    onChange(index, value) {
        const {currentSelections} = this.props;
        currentSelections[index] = value;
        while (currentSelections.length > index + 1) {
            currentSelections.pop()
        }

        this.props.onChange(currentSelections);
    }

    /**
     *
     * @param className
     * @param currentSelections
     * @param placeholders
     * @param options options to display
     * @param index Current Level, default is 0
     * @return {*}
     */
    renderCascader(className, currentSelections, placeholders, options, index = 0) {
        let select = null;
        if (options) { // if options in current level is not null (maybe not selected), render a select
            select = [
                <Select key={index}
                        className={`${styles.select} ${className}`}
                        value={currentSelections && currentSelections[index]}
                        placeholder={placeholders && placeholders[index]}
                        onChange={this.onChange.bind(this, index)}>
                    {options.map(option => <Option key={option.id} value={option.id}>{option.text}</Option>)}
                </Select>
            ]
        }

        if (index < currentSelections.length && options) {
            options = options.find(item => item.id == currentSelections[index]);

            return select.concat(
                this.renderCascader(
                    className,
                    currentSelections,
                    placeholders,
                    options.children,
                    index + 1
                )
            );
        } else {
            return select;
        }
    }

    render() {
        //TODO: update
        const {currentSelections, placeholders, className, onChange, options} = this.props;

        return <div>
            {this.renderCascader(className, currentSelections, placeholders, options)}
        </div>;
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
        children: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.any.isRequired,
            text: PropTypes.string.isRequired,
            children: PropTypes.array
        })).isRequired
    })).isRequired
};

Dropdown.defaultProps = {
    className: "",
    currentSelections: [],
    placeholder: []
};

export default Dropdown;