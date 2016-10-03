/**
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {relocate} from "relocate-lazy-load";
import {createSelector} from "reselect";
import Question from "../../components/Question";
import {QuestionType} from "../../enums/QuestionType";
import QuestionTypePicker from "../../components/QuestionTypePicker";
import {QuestionModificationType}  from "../../enums/QuestionModificationType";
// import "antd/dist/antd.less"; //Disable default styles.
import "./index.scss";

import makeQuestionnaireActionCreator from "./actions";
import makeQuestionnaireSelector from "./selectors";
import makeQuestionnaireReducer from "./reducer";
import "../../styles/index.less";

function generateQuestionID(questions) {
    return Math.max(...questions.map(question => question.id)) + 1;
}

class Questionnaire extends React.Component {

    constructor(props) {
        super(props);

        this.onPickQuestionType = this.onPickQuestionType.bind(this);
    }

    onPickQuestionType(typeValue) {
        //add a question of the specific type with a generated id
        const question = {
            id: generateQuestionID(this.props.questions),
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

    render() {
        const {
            questions,
            allowEditing,
            answers,
            onAnswerChange,
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
                              onAnswerChange={onAnswerChange}
                              answer={answers[question.id]}
                              onEditStart={onQuestionEditStart.bind(this)}
                              onEdited={onQuestionEdited.bind(this)}
                              onEditCancel={onQuestionEditCancel.bind(this)}/>
                </li>)}
            </ol>
        </div>);
    }
}

Questionnaire.propTypes = {
    questions: PropTypes.array.isRequired,
    answers: PropTypes.object,
    editing: PropTypes.bool,
    onAnswerChange: PropTypes.func.isRequired,
    allowEditing: PropTypes.bool,
    onEdited: PropTypes.func
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
    const {answerChange, modifyQuestion, modifyQuestionStart, modifyQuestionCancel} = actionCreators;

    return {
        onAnswerChange: (questionId, answer) => dispatch(answerChange(questionId, answer)),//TODO: if onAnswerChange is defined in parents, return an empty object.
        onQuestionEditStart: (question) => dispatch(modifyQuestionStart(question)),
        onQuestionEdited: (question) => dispatch(modifyQuestion(question)),
        onQuestionEditCancel: (question) => dispatch(modifyQuestionCancel(question))
    }
}

export default relocate(
    makeQuestionnaireActionCreator,
    makeQuestionnaireReducer,
    makeQuestionnaireSelector
)(connect(mapStateToProps, mapDispatchToProps)(Questionnaire));