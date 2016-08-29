/**
 * Created by ZhuGongpu on 16/8/1.
 */
import React from "react";
import styles from "./index.scss";
import {QuestionType} from "../../enums/QuestionType";
import Questionnaire from "../Questionnaire";

const questions = [{
    type: QuestionType.SingleChoice.value,
    id: "1",
    title: "问题标题2",
    options: [{
        id: "1",
        text: "选项1"
    }, {
        id: "2",
        text: "选项2"
    }, {
        id: "3",
        text: "选项3"
    }, {
        id: "4",
        text: "选项4"
    }, {
        id: "5",
        text: "选项5"
    }],
    next: "2"
}, {
    type: QuestionType.MultipleChoice.value,
    id: "2",
    title: "问题标题2",
    options: [{
        id: "1",
        text: "选项1"
    }, {
        id: "2",
        text: "选项2"
    }, {
        id: "3",
        text: "选项3"
    }, {
        id: "4",
        text: "选项4"
    }, {
        id: "5",
        text: "选项5"
    }],
    next: "3"
}];

export default() => (<div>
    <div className={styles.introduction}>This is the HomePage</div>
    <div>
        <Questionnaire questions={questions}/>
    </div>
</div>)
