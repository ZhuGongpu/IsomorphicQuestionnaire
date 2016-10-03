/**
 * A Single Question
 * Created by ZhuGongpu on 16/8/29.
 */

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {Button} from "antd";
import {QuestionType} from "../../enums/QuestionType";
import {Selection, Input, Dropdown, Matrix} from "./Options";
import {QuestionModificationType} from "../../enums/QuestionModificationType";
import styles from "./index.scss";
import {fromJS} from "immutable";

function generateOptionID(options = [{id: 0}]) {
    return Math.max(...options.map(option => option.id)) + 1
}

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...nextProps.data}); //reset state.
    }

    //region Edit Question

    //region Title
    onTitleEdited(newTitle) {
        this.setState({
            title: newTitle
        });
    }

    //endregion

    //region Options
    onOptionAdded(option) {
        const options = this.state.options || this.props.data.options;
        if (!option.id) {
            option.id = generateOptionID(options);
        }

        this.setState({options: fromJS(options).push(option).toJS()});
    }

    onOptionDeleted(index) {
        const options = this.state.options || this.props.data.options;
        this.setState({options: fromJS(options).delete(index).toJS()})
    }

    onOptionInputChange(input) {
        this.setState({input});
    }

    //endregion

    //region Label
    onLabelAdded(label) {
        const labels = this.state.labels || this.props.data.labels;
        this.setState({labels: fromJS(labels).push(label).toJS()})
    }

    onLabelDeleted(index) {
        const labels = this.state.labels || this.props.data.labels;
        this.setState({labels: fromJS(labels).delete(index).toJS()})
    }

    onLabelInputChange(input) {
        this.setState({input})
    }

    //endregion

    //region Input
    onInputPlaceholderEdited(newPlaceholder) {
        this.setState({placeholder: newPlaceholder});
        console.log("Question onInputPlaceholderEdited: %o", newPlaceholder);
    }

    //endregion

    onQuestionEdited() {
        const {onEdited, data} = this.props;
        if (onEdited) {
            let question = {
                ...data,
                ...this.state,
            };
            question.modificationType = question.modificationType || QuestionModificationType.Update.value;

            onEdited(question);//merge the original question and the modified one
            console.log("Question onQuestionEdited: %O  %o", question, this.state);
        }
    }

    onQuestionEditCancel() {
        const {onEditCancel, data} = this.props;

        if (onEditCancel) {
            onEditCancel(data);
        }
    }

    //endregion

    //region Answer Change
    onAnswerChange(answer) {
        this.props.onAnswerChange(this.props.data.id, answer)
    }

    //endregion

    //region render
    buildOptions(question, answer) {
        switch (question.type) {
            case QuestionType.SingleChoice.value:
            case QuestionType.MultipleChoice.value:
                return <Selection options={question.options}
                                  currentSelection={answer}
                                  input={this.state.input}
                                  editing={question.editing}
                                  allowMultiSelection={question.type == QuestionType.MultipleChoice.value}
                                  onSelectionChange={this.onAnswerChange.bind(this)}
                                  onOptionAdded={this.onOptionAdded.bind(this)}
                                  onOptionDeleted={this.onOptionDeleted.bind(this)}
                                  onOptionInputChange={this.onOptionInputChange.bind(this)}/>;
            case QuestionType.Input.value:
                return <Input onChange={this.onAnswerChange.bind(this)}
                              placeholder={question.placeholder}
                              editing={question.editing}
                              onPlaceholderEdited={this.onInputPlaceholderEdited.bind(this)}
                              currentValue={answer}/>;
            case QuestionType.Dropdown.value:
                return <Dropdown placeholders={question.placeholders}
                                 currentSelections={answer}
                                 onChange={this.onAnswerChange.bind(this)}
                                 editing={question.editing}
                                 options={question.options}/>;
            case QuestionType.Matrix.value:
                return <Matrix labels={question.labels}
                               values={answer}
                               editing={question.editing}
                               input={this.state.input}
                               onLabelAdded={this.onLabelAdded.bind(this)}
                               onLabelDeleted={this.onLabelDeleted.bind(this)}
                               onLabelInputChange={this.onLabelInputChange.bind(this)}
                               onChange={this.onAnswerChange.bind(this)}/>;
            default:
                return null;
        }
    }

    buildActions(allowEditing, editing) {
        const {onEditStart, onEdited, data} = this.props;

        return allowEditing ? (
            editing ? <div className="question-actions-container">
                <Button type="primary"
                        size="small"
                        style={{marginRight: 8}}
                        onClick={this.onQuestionEdited.bind(this)}>确认</Button>
                <Button size="small"
                        onClick={this.onQuestionEditCancel.bind(this)}>取消</Button>
            </div> : <div className="question-actions-container">
                <Button type="primary"
                        size="small"
                        style={{marginRight: 8}}
                        onClick={onEditStart.bind(this, data)}>编辑</Button>
                <Button size="small"
                        onClick={
                            onEdited.bind(this, {...data, modificationType: QuestionModificationType.Delete.value})
                        }>删除</Button>
            </div>
        ) : null;
    }

    render() {
        const {data, answer, className, allowEditing} = this.props;
        const {editing} = data;
        const mergedData = Object.assign({}, data, editing ? this.state : {});

        return (<div className={`${styles["question"]} ${className}`}>
            <div className={`${styles["question-prompt"]} question-prompt`}>
                {editing ?
                    <Input placeholder="问题标题"
                           currentValue={mergedData.title}
                           onChange={this.onTitleEdited.bind(this)}/>
                    : mergedData.title}
            </div>
            <div className={`${styles["question-options-container"]} question-options-container`}>
                {this.buildOptions(mergedData, answer)}
            </div>
            {this.buildActions(allowEditing, editing)}
        </div>);
    }

    //endregion
}

Question.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    onAnswerChange: PropTypes.func.isRequired,
    answer: PropTypes.any,
    allowEditing: PropTypes.bool,
    onEditStart: PropTypes.func,
    onEdited: PropTypes.func,
    onEditCancel: PropTypes.func
};

Question.defaultProps = {
    className: ""
};

export default Question;