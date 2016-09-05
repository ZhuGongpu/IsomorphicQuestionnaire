/**
 * A Single Question
 * Created by ZhuGongpu on 16/8/29.
 */

import React, {PropTypes} from "react";
import {QuestionType} from "../../enums/QuestionType";
import {Selection, Input, Dropdown, Matrix} from "./Options";

class Question extends React.Component {

    onAnswerChange(answer) {
        this.props.onAnswerChange(this.props.data.id, answer)
    }

    buildOptions(question, answer) {
        switch (question.type) {
            case QuestionType.SingleChoice.value:
            case QuestionType.MultipleChoice.value:
                return <Selection options={question.options}
                                  currentSelection={answer}
                                  allowMultiSelection={question.type == QuestionType.MultipleChoice.value}
                                  onSelectionChange={this.onAnswerChange.bind(this)}/>;
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
        const {data, answer} = this.props;

        return (<div>
            <div className="question-prompt">{data.title}</div>
            <div className="question-options-container">
                {this.buildOptions(data, answer)}
            </div>
        </div>);
    }
}

Question.propTypes = {
    data: PropTypes.object.isRequired,
    onAnswerChange: PropTypes.func.isRequired,
    answer: PropTypes.any
};

export default Question;