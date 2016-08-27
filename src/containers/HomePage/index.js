/**
 * Created by ZhuGongpu on 16/8/1.
 */
import React from "react";
import {Link} from "react-router";
import styles from "./index.scss";

export default() => (<div>
    <div className={styles.introduction} >This is the HomePage</div>
    <Link to="/counter">counter</Link>
</div>)
