import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createRootNavigator } from './appRoot/Router';
import LocalStorage from './common/LocalStorage';
import PrintLog from './common/PrintLog';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }

    async componentDidMount() {
        // let isLogin = await LocalStorage.read("isLogin");
        PrintLog("isLogin >> ", isLogin);
        let isLogin = true;
        this.setState({ isLogin });
    }

    render() {
        const { isLogin } = this.state;
        const Layout = createAppContainer(createRootNavigator(isLogin));
        return (
            <View style={{ flex: 1 }}>
                {<Layout />}
            </View>
        )
    }
}

