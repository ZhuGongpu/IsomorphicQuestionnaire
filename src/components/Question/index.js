/**
 * A Single Question
 * Created by ZhuGongpu on 16/8/29.
 */

import React, {PropTypes} from "react";
import {QuestionType} from "../../enums/QuestionType";
import {Selection, Input, Dropdown, Matrix} from "./Options";
import styles from "./index.scss";

class Question extends React.Component {

    //region Edit Question
    onOptionEdited(newOptions) {
        //TODO:

        console.log("onOptionEdited: %O", newOptions);
    }
    //endregion

    onAnswerChange(answer) {
        this.props.onAnswerChange(this.props.data.id, answer)
    }

    //region render
    buildOptions(question, answer) {
        switch (question.type) {
            case QuestionType.SingleChoice.value:
            case QuestionType.MultipleChoice.value:
                return <Selection options={question.options}
                                  currentSelection={answer}
                                  editing={question.editing}
                                  allowMultiSelection={question.type == QuestionType.MultipleChoice.value}
                                  onSelectionChange={this.onAnswerChange.bind(this)}
                                  onOptionsEdited={this.onOptionEdited.bind(this)}/>;
            case QuestionType.Input.value:
                return <Input onChange={this.onAnswerChange.bind(this)}
                              placeholder={question.placeholder}
                              currentValue={answer}/>;
            case QuestionType.Dropdown.value:
                return <Dropdown placeholders={question.placeholders}
                                 currentSelections={answer}
                                 onChange={this.onAnswerChange.bind(this)}
                                 options={question.options}/>;
            case QuestionType.Matrix.value:
                return <Matrix labels={question.labels}
                               values={answer}
                               onChange={this.onAnswerChange.bind(this)}/>;
            default:
                return null;
        }
    }

    render() {
        const {data, answer, className} = this.props;

        return (<div className={`${styles["question"]} ${className}`}>
            <div className={`${styles["question-prompt"]} question-prompt`}>{data.title}</div>
            <div className={`${styles["question-options-container"]} question-options-container`}>
                {this.buildOptions(data, answer)}
            </div>
        </div>);
    }

    //endregion
}

Question.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    onAnswerChange: PropTypes.func.isRequired,
    answer: PropTypes.any
};

Question.defaultProps = {
    className: ""
};

export default Question;