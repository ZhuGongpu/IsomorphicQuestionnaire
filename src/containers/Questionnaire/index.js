/**
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {relocate} from "relocate-lazy-load";
import {createSelector} from "reselect";
import Question from "../../components/Question";
import "antd/dist/antd.less";
import "./index.scss";

import makeQuestionnaireActionCreator from "./actions";
import makeQuestionnaireSelector from "./selectors";
import makeQuestionnaireReducer from "./reducer";

class Questionnaire extends React.Component {

    render() {
        const {questions, answers, onAnswerChange} = this.props;
        //TODO: handle NEXT
        return (<ol>
            {questions.map(question => <li key={question.id}>
                <Question data={question}
                          onAnswerChange={onAnswerChange}
                          answer={answers[question.id]}/>
            </li>)}
        </ol>);
    }
}

Questionnaire.propTypes = {
    questions: PropTypes.array.isRequired
};

const mapStateToProps = (state, props) => {
    const {selectors} = props;
    const {selectAnswers} = selectors;

    return createSelector(
        selectAnswers(),
        (answers)=> ({answers})
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