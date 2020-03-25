import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
                <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                    <Text>Dashboard</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Dashboard;
