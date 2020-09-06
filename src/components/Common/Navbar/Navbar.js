import React, { Component } from "react";
import Button from "../Button/Button";
import {withRouter} from "react-router-dom";

class Navbar extends Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick(target = '') {
        console.log("on click handler")
        this.props.history.push(`/${target}`)
    }

    render() {
        return (
            <div className={'navbar--wrapper'}>
                <header className={'header'}>
                    <div style={{fontFamily: 'cursive', fontSize: 'x-large'}}>
                        <span>Simple navbar</span>
                    </div>
                    <div style={{cursor: 'pointer', margin: 'auto', fontFamily: 'cursive', fontSize: 'x-large'}} onClick={(e) => this.onClick()}>Home</div>
                    <div>
                        <Button onClick={null} label={'actionB1'} />
                        <Button onClick={null} label={'actionB2'} />
                    </div>
                </header>
            </div>
        );
    }
}

export default withRouter(Navbar)