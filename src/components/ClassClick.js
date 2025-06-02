import React, { Component } from "react";

class ClassClick extends Component {

    clickHandler(params) {
        console.log("class button clicked");
    }

    render() {
        return (
            <button onClick={this.clickHandler}> class click button</button>
        )
    }

}
export default ClassClick;