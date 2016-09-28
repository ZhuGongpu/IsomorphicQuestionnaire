/**
 * A Single Question
 * Created by ZhuGongpu on 16/8/29.
 */

import React, {PropTypes} from "react";
import {QuestionType} from "../../enums/QuestionType";
import {Selection, Input, Dropdown, Matrix} from "./Options";
import {QuestionModificationType} from "../../enums/QuestionModificationType";
import styles from "./index.scss";

class Question extends React.Component {

    //region Edit Question
    onOptionEdited(newOptions) {
        const {data} = this.props;
        data.options = newOptions;
        this.onQuestionEdited(QuestionModificationType.Update.value, data)
    }

    onTitleEdited(newTitle) {
        const {data} = this.props;
        data.title = newTitle;
        this.onQuestionEdited(QuestionModificationType.Update.value, data)
    }

    onQuestionEdited(modificationType, newQuestion) {
        const {onEdited} = this.props;
        if (onEdited)
            onEdited({...newQuestion, modificationType})//add `modificationType` to the edited question
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
            <div className={`${styles["question-prompt"]} question-prompt`}>
                {data.editing ?
                    <Input placeholder="问题标题"
                           currentValue={data.title}
                           onChange={this.onTitleEdited.bind(this)}/>
                    : data.title}
            </div>
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
    answer: PropTypes.any,
    onEdited: PropTypes.func
};

Question.defaultProps = {
    className: ""
};

export default Question;