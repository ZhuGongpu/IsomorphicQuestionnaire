/**
 * Rate question
 * Created by ZhuGongpu on 16/9/5.
 */

import React, {PropTypes} from "react";
import {Rate} from "antd";

class Matrix extends React.Component {

    onChange(index, value) {
        const {values} = this.props;
        values[index] = value;

        this.props.onChange(values);
    }

    render() {
        const {maxStarCount, labels, values} = this.props;

        return <div>
            {
                labels.map((label, index, array) => <div key={index}>
                        <span>{label} : </span>
                        <Rate count={maxStarCount}
                              value={values[index]}
                              onChange={this.onChange.bind(this, index)}/>
                    </div>
                )
            }
        </div>
    }
}

Matrix.propTypes = {
    maxStarCount: PropTypes.number,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

Matrix.defaultProps = {
    maxStarCount: 5,
    values: []
};

export default Matrix;