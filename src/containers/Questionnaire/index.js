/**
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {relocate} from "relocate-lazy-load";
import {createSelector} from "reselect";
import Question from "../../components/Question";
import QuestionTypePicker from "../../components/QuestionTypePicker";
// import "antd/dist/antd.less"; //Disable default styles.
import "./index.scss";

import makeQuestionnaireActionCreator from "./actions";
import makeQuestionnaireSelector from "./selectors";
import makeQuestionnaireReducer from "./reducer";
import "../../styles/index.less";

class Questionnaire extends React.Component {

    constructor(props) {
        super(props);

        this.onPickQuestionType = this.onPickQuestionType.bind(this);
    }

    onPickQuestionType(typeValue) {
        //TODO: add a question of the specific type
    }

    render() {
        const {questions, editing, answers, onAnswerChange} = this.props;
        //TODO: handle NEXT
        return (<div className="questionnaire">
            {editing ? <QuestionTypePicker onSelected={this.onPickQuestionType}/> : null}
            <ol>
                {questions.map(question => <li key={question.id}>
                    <Question data={question}
                              editing={question.editing}
                              onAnswerChange={onAnswerChange}
                              answer={answers[question.id]}/>
                </li>)}
            </ol>
        </div>);
    }
}

Questionnaire.propTypes = {
    questions: PropTypes.array.isRequired,
    answers: PropTypes.object,
    editing: PropTypes.bool,
    onAnswerChange: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
    const {selectors} = props;
    const {selectAnswers, selectModifiedQuestions} = selectors;

    return createSelector(
        (state, props) => props,
        selectAnswers(),
        selectModifiedQuestions,
        (props, answers, modifiedQuestions)=> ({
            answers,
            questions: props.questions.map(question =>
                modifiedQuestions[question.id] ? modifiedQuestions[question.id] : question
            )
        })
    )
};

function mapDispatchToProps(dispatch, props) {
    const {actionCreators} = props;
    const {answerChange} = actionCreators;

    //TODO: if onAnswerChange is defined in parents, return an empty object.
    return {
        onAnswerChange: (questionId, answer) =>
            dispatch(answerChange(questionId, answer))
    }
}

export default relocate(
    makeQuestionnaireActionCreator,
    makeQuestionnaireReducer,
    makeQuestionnaireSelector
)(connect(mapStateToProps, mapDispatchToProps)(Questionnaire));