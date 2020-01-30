import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CommonStyle from '../../../common/CommonStyle';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <View style={CommonStyle.container_center}>
                <Text>Dashboard</Text>
            </View>
        );
    }
}

export default Dashboard;
