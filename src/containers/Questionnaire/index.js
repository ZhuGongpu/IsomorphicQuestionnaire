/**
 * Created by ZhuGongpu on 16/8/29.
 */
import React, {PropTypes} from "react";
import Question from "../../components/Question";
import "antd/dist/antd.less";
import "./index.scss";

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

export default Questionnaire