/**
 * Created by ZhuGongpu on 16/8/29.
 */

import React, {PropTypes} from "react";

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import styles from  "./index.scss";


class Dropdown extends React.Component {

    static getNestingLevel(options) {
        if (!options) return 0;
        return 1 + Math.max(... options.map(item => Dropdown.getNestingLevel(item.children)));
    }

    onChange(index, currentSelection) {
        const {currentSelections} = this.props;
        currentSelections[index] = currentSelection.value;
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
                        clearable={false}
                        className={`${styles.select} ${className}`}
                        options={options.map(option => ({value: option.id, label: option.text}))}
                        value={currentSelections && currentSelections[index]}
                        placeholder={placeholders && placeholders[index] || ""}
                        onChange={this.onChange.bind(this, index)}/>
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
        const {currentSelections, placeholders, className, options} = this.props;

        return <div>
            {this.renderCascader(className, currentSelections, placeholders, options)}
        </div>;
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