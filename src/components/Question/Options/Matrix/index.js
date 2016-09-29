/**
 * Rate question
 * Created by ZhuGongpu on 16/9/5.
 */

import React, {PropTypes} from "react";
import {Input, Tag, Button, Popconfirm} from "antd";
import {Rate} from "antd";
import styles from "./index.scss";

class Matrix extends React.Component {

    onChange(index, value) {
        const {values} = this.props;
        values[index] = value;

        this.props.onChange(values);
    }

    //region Edit

    onInputChange(e) {
        const {onLabelInputChange} = this.props;
        if (onLabelInputChange) {
            onLabelInputChange(e.target.value)
        }
    }

    onLabelAdded() {
        const {input, onLabelAdded} = this.props;
        if (onLabelAdded)
            onLabelAdded(input);
    }

    onLabelDeleted(index) {
        const {onLabelDeleted} = this.props;
        if (onLabelDeleted)
            onLabelDeleted(index)
    }

    //endregion


    buildMatrix(labels, values, maxStarCount) {
        return <div>
            {
                labels.map((label, index, array) => <div key={index} className="matrix-option">
                        <span className={styles.label}>{label} : </span>
                        <Rate className={styles.rate}
                              count={maxStarCount}
                              value={values[index]}
                              onChange={this.onChange.bind(this, index)}/>
                    </div>
                )
            }
        </div>
    }

    buildEditingMatrix(labels, input) {
        return <div>
            {
                labels.map((label, index) =>
                    <Tag key={index} closable
                         afterClose={this.onLabelDeleted.bind(this, index)}>
                        {label}
                    </Tag>
                )
            }
            {<Popconfirm
                title={<Input placeholder="输入评分项" currentValue={input} onChange={this.onInputChange.bind(this)}/>}
                onConfirm={this.onLabelAdded.bind(this)}
                arrowPointAtCenter={true}>
                <Button size="small" type="dashed">+ 添加</Button>
            </Popconfirm>}
        </div>
    }

    render() {
        const {maxStarCount, labels, values, editing, input} = this.props;

        return editing ? this.buildEditingMatrix(labels, input) : this.buildMatrix(labels, values, maxStarCount);
    }
}

Matrix.propTypes = {
    maxStarCount: PropTypes.number,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    input: PropTypes.string,// used in editing mode
    values: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onLabelInputChange: PropTypes.func,
    onLabelAdded: PropTypes.func,
    onLabelDeleted: PropTypes.func
};

Matrix.defaultProps = {
    maxStarCount: 5,
    values: []
};

export default Matrix;