import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import CommonStyle from '../../../common/CommonStyle'

export class Screen1 extends Component {

    render() {
        return (
            <View style={CommonStyle.container_center}>
                <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                    <Text>Screen1</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Screen1
