import React, { Component } from "react";

class UserGreeting extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn : false
        }
    }

    render (){
        // return this.state.isLoggedIn && <div>Welcome Vinay</div>
        return this.state.isLoggedIn ? (
            <div>Welcome Vinay</div>
        ) : (
            <div>Welcome Guest</div>
        )
    }
}

export default UserGreeting;