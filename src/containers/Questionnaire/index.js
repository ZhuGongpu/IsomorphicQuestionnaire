/**
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {relocate} from "relocate-lazy-load";
import {createSelector} from "reselect";
import {Button} from "antd";
import {fromJS} from "immutable";
import Question from "../../components/Question";
import {QuestionType} from "../../enums/QuestionType";
import QuestionTypePicker from "../../components/QuestionTypePicker";
import {QuestionModificationType} from "../../enums/QuestionModificationType";
import validate from "../../utils/validate";
import "./index.scss";
import makeQuestionnaireActionCreator from "./actions";
import makeQuestionnaireSelector from "./selectors";
import makeQuestionnaireReducer from "./reducer";
import "../../styles/index.less";
// import "antd/dist/antd.less"; //Disable default styles.

function generateQuestionID(...questions) {
    return Math.max(-1, ...questions.map(question => question.id)) + 1;
}

class Questionnaire extends React.Component {

    constructor(props) {
        super(props);

        this.onPickQuestionType = this.onPickQuestionType.bind(this);
    }

    onPickQuestionType(typeValue) {
        //add a question of the specific type with a generated id
        const question = {
            id: generateQuestionID(...this.props.originalQuestions, ...this.props.modifiedQuestions),
            type: typeValue,
            modificationType: QuestionModificationType.Add.value
        };

        //Initialize
        switch (typeValue) {
            case QuestionType.Input.value:
                break;
            case QuestionType.Dropdown.value:
                question.placeholders = [];
            case QuestionType.SingleChoice.value:
            case QuestionType.MultipleChoice.value:
                question.options = [];
                break;
            case QuestionType.Matrix.value:
                question.labels = [];
                break;
            default:
                break;
        }

        this.props.onQuestionEditStart(question);
    }

    onAnswerChange(questionID, answer) {
        const {onAnswerChange, questions, validationError} = this.props;
        onAnswerChange(questionID, answer);

        //validate the question
        const question = questions.find(question => question.id == questionID);
        const errors = validate([question], {[questionID]: answer});

        if (errors.length == 0) {  //clear error if exists.(do nothing util submit if no error occurs)
            delete question.error;
            validationError([question]);
        }
    }

    /**
     * Submit Answers
     */
    submit() {
        const {questions, answers, validationError} = this.props;
        const errors = validate(questions, answers);

        if (errors && errors.length > 0) {
            validationError(errors);
        } else {
            this.props.onSubmit(answers);
        }
    }

    submitEdit() {
        //remove unnecessary properties
        const questions = this.props.questions.map(question => {
            return fromJS(question).delete("modificationType").delete("editing").delete("input").delete("error").toJS()
        });

        //todo:
        console.log(JSON.stringify(questions));
    }

    render() {
        const {
            questions,
            onSubmit,
            allowEditing,
            answers,

            onQuestionEditStart,
            onQuestionEdited,
            onQuestionEditCancel
        } = this.props;
        //TODO: handle NEXT
        return (<div className="questionnaire">
            {allowEditing ? <QuestionTypePicker onSelected={this.onPickQuestionType}/> : null}
            <ol>
                {questions.map(question => <li key={question.id}>
                    <Question data={question}
                              allowEditing={allowEditing}
                              editing={question.editing}
                              onAnswerChange={this.onAnswerChange.bind(this)}
                              answer={answers[question.id]}
                              onEditStart={onQuestionEditStart.bind(this)}
                              onEdited={onQuestionEdited.bind(this)}
                              onEditCancel={onQuestionEditCancel.bind(this)}/>
                </li>)}
                {!!onSubmit && !allowEditing ?
                    <div style={{textAlign: "center", marginTop: 20}}>
                        <Button type="primary" onClick={this.submit.bind(this)}>提交</Button>
                    </div>
                    : null}
                {allowEditing ?
                    <div style={{textAlign: "center", marginTop: 20}}>
                        <Button type="primary" onClick={this.submitEdit.bind(this)}>提交修改</Button>
                    </div>
                    : null}
            </ol>
        </div>);
    }
}

Questionnaire.propTypes = {
    questions: PropTypes.array.isRequired,
    answers: PropTypes.object,
    editing: PropTypes.bool,
    onAnswerChange: PropTypes.func,
    allowEditing: PropTypes.bool,
    // onEdited: PropTypes.func,
    onSubmit: PropTypes.func, // show submit button when onSubmit is not null
};

const mapStateToProps = (state, props) => {
    const {selectors} = props;
    const {selectAnswers, selectModifiedQuestions} = selectors;

    return createSelector(
        (state, props) => props,
        selectAnswers(),
        selectModifiedQuestions(),
        (props, answers, modifiedQuestions)=> ({
            answers,
            originalQuestions: props.questions,
            modifiedQuestions: Object.keys(modifiedQuestions)
                .map(key => modifiedQuestions[key]),
            //merge props.questions and modifiedQuestions
            questions: props.questions.filter(question => // remove deleted questions
                !modifiedQuestions[question.id] ||
                modifiedQuestions[question.id].modificationType != QuestionModificationType.Delete.value
            ).concat(Object.keys(modifiedQuestions)// concat added questions
                .map(key => modifiedQuestions[key])
                .filter(question => question.modificationType == QuestionModificationType.Add.value)
            ).map(question => // override modified questions
                modifiedQuestions[question.id] ? modifiedQuestions[question.id] : question
            )
        })
    )
};

function mapDispatchToProps(dispatch, props) {
    const {actionCreators} = props;
    const {answerChange, modifyQuestion, modifyQuestionStart, modifyQuestionCancel, validationError} = actionCreators;

    return {
        onAnswerChange: (questionId, answer) => dispatch(answerChange(questionId, answer)),//TODO: if onAnswerChange is defined in parents, return an empty object.
        onQuestionEditStart: (question) => dispatch(modifyQuestionStart(question)),
        onQuestionEdited: (question) => dispatch(modifyQuestion(question)),
        onQuestionEditCancel: (question) => dispatch(modifyQuestionCancel(question)),
        validationError: (errors) => dispatch(validationError(errors))
    }
}

export default relocate(
    makeQuestionnaireActionCreator,
    makeQuestionnaireReducer,
    makeQuestionnaireSelector
)(connect(mapStateToProps, mapDispatchToProps)(Questionnaire));