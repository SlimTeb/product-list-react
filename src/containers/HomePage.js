import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import Button from "../components/Common/Button/Button";

class HomePage extends Component {


    render() {
        return (
            <div>
                <Button
                    label={'Products'}
                    onClick={() => this.props.history.push('/products')}
                />
                <Button
                    label={'Profile'}
                    /*onClick={() => this.props.history.push()}*/
                />
            </div>
        );
    }
}

export default withRouter(HomePage)