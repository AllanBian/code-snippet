import React, { Component } from "react";
import { Root } from "native-base";
import AppContainer from '../navigation/';

export default class App extends Component {
    render() {
        return (
            <Root>
                <AppContainer />
            </Root>
        );
    }
}
