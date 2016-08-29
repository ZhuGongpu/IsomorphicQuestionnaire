/**
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import {connect} from "react-redux";
import lazyLoad from "../../higherOrderComponents/LazyLoad";
import {createSelector} from "reselect";
import Question from "../../components/Question";
import {answerChange} from "./actions";
import {selectAnswers, DOMAIN} from "./selectors";
import reducer from "./reducer";

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

const mapStateToProps = createSelector(
    selectAnswers(),
    (answers)=> ({answers})
);

function mapDispatchToProps(dispatch) {
    //TODO: if onAnswerChange is defined in parents, return an empty object.
    return {
        onAnswerChange: (questionId, answer) => dispatch(answerChange(questionId, answer))
    }
}

//TODO: relocate
export default lazyLoad(DOMAIN, reducer)(connect(mapStateToProps, mapDispatchToProps)(Questionnaire));