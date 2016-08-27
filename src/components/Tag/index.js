import React, {PropTypes} from "react";
import "./index.scss"

export default class Tag extends React.Component {
    render() {
        return <div className="tag">{this.props.children}</div>
    }
}

Tag.propTypes = {
    children: PropTypes.node.isRequired
}